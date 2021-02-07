import { StoryListStory } from "./model";
import { DEFAULT_GENRES, parseTags } from "../story";

export interface StoryListParseOptions {
  genres: string[];
  createTemplate: () => HTMLTemplateElement;
}

export default async function parseStoryList(
  document?: Document | DocumentFragment,
  options?: Partial<StoryListParseOptions>
): Promise<StoryListStory[] | undefined> {
  const doc = document ?? window.document;
  const opts: StoryListParseOptions = {
    genres: DEFAULT_GENRES,
    createTemplate() {
      if ("createElement" in doc) {
        return doc.createElement("template");
      }
      return window.document.createElement("template");
    },
    ...options,
  };

  const universes: string[] = [];
  const links = doc.querySelectorAll("#content_wrapper_inner > a");
  if (links.length > 1) {
    universes.push(links.item(0).textContent!);
    universes.push(links.item(1).textContent!);
  } else {
    const container = doc.getElementById(
      "content_wrapper_inner"
    ) as HTMLDivElement;
    let text = "";
    for (const node of Array.from(container.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    }
    universes.push(
      ...text
        .split(/\n+/g)
        .map((u) => u.trim())
        .filter((u) => u.length > 0 && u !== "Crossovers")
    );
  }

  const rows = doc.querySelectorAll(".z-list") as NodeListOf<HTMLDivElement>;
  if (rows.length === 0) {
    return undefined;
  }

  return Array.from(rows).map((row: HTMLDivElement) => {
    const storyAnchor = row.firstElementChild as HTMLAnchorElement;
    const authorAnchor = row.querySelector(
      'a[href^="/u/"]'
    ) as HTMLAnchorElement;
    const descriptionElement = row.querySelector(".z-indent") as HTMLDivElement;
    const tagsElement = row.querySelector(".z-padtop2") as HTMLDivElement;
    const meta = parseTags(tagsElement, opts.genres, opts.createTemplate);

    const description = Array.from(descriptionElement.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent)
      .join(" ");

    let imageUrl: string | undefined = undefined;
    const imageElement = row.querySelector("img");
    if (imageElement) {
      imageUrl = imageElement.dataset["original"];
    }

    return {
      id: +storyAnchor.href.match(/\/s\/(\d+)\/.*/i)![1],
      title: storyAnchor.textContent!,
      author: {
        id: +authorAnchor.href.match(/\/u\/(\d+)\/.*/i)![1],
        name: authorAnchor.textContent!,
      },
      description,
      imageUrl,
      favorites: meta.favorites,
      follows: meta.follows,
      reviews: meta.reviews,
      genre: meta.genre,
      characters: meta.characters,
      language: meta.language,
      published: meta.published,
      updated: meta.updated,
      rating: meta.rating,
      words: meta.words,
      universes: meta.universes.length > 0 ? meta.universes : universes,
      status: meta.status,
    };
  });
}
