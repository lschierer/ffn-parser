import { Follow } from "./model";

export interface FollowsParseOptions {}

export default async function parseFollows(
  document?: Document | DocumentFragment,
  options?: Partial<FollowsParseOptions>
): Promise<Follow[] | undefined> {
  const doc = document ?? window.document;
  const opts: FollowsParseOptions = {
    ...options,
  };

  const table = doc.querySelector("form #gui_table1i");
  if (!table) {
    return undefined;
  }

  const rows = table.querySelectorAll(
    "tbody tr"
  ) as NodeListOf<HTMLTableRowElement>;

  return Array.from(rows)
    .filter(
      (row) => row.children.length === 6 && row.querySelector("td") != null
    )
    .map((row) => {
      const storyAnchor = row.children[0]
        .firstElementChild as HTMLAnchorElement;
      const userAnchor = row.children[1].firstElementChild as HTMLAnchorElement;

      return {
        id: +storyAnchor.href.match(/\/s\/(\d+)\/.*/i)![1],
        title: storyAnchor.textContent!,
        author: {
          id: +userAnchor.href.match(/\/u\/(\d+)\/.*/i)![1],
          name: userAnchor.textContent!,
        },
        category: row.children[2].textContent!,
        updated: parseDate(row.children[3].textContent!),
        added: parseDate(row.children[4].textContent!),
      };
    });
}

function parseDate(date: string): Date {
  const [month, day, year] = date.split("-");
  return new Date(+year, +month - 1, +day, 0, 0, 0, 0);
}
