import { Story } from "./model";
import Chapter from "./model/chapter";

interface ParseOptions {
  genres: string[];
  createTemplate: () => HTMLTemplateElement;
}

function parseProfile(
  document?: Document | DocumentFragment,
  options?: Partial<ParseOptions>
): Story {
  const doc = document ?? window.document;
  const opts: ParseOptions = {
    genres: options?.genres ?? [
      "General",
      "Romance",
      "Humor",
      "Drama",
      "Poetry",
      "Action",
      "Adventure",
      "Mystery",
      "Horror",
      "Parody",
      "Angst",
      "Supernatural",
      "Suspense",
      "Sci-Fi",
      "Fantasy",
      "Spiritual",
      "Tragedy",
      "Western",
      "Crime",
      "Family",
      "Hurt",
      "Comfort",
      "Friendship",
    ],
    createTemplate:
      options?.createTemplate ??
      (() => {
        if ((doc as Document).createElement != null) {
          return (doc as Document).createElement("template");
        }

        return window.document.createElement("template");
      }),
  };

  const profileElement = doc.getElementById("profile_top");
  const chapterElement = doc.getElementById("chap_select");
  const breadCrumbElement = doc.getElementById("pre_story_links");

  if (!profileElement) {
    throw new Error("Profile element not found, cannot parse story info.");
  }

  let offset = 0;
  const cover = profileElement.children[0].firstElementChild;
  if (!cover || cover.nodeName !== "IMG") {
    offset--;
  }

  const titleElement = profileElement.children[offset + 2];
  const authorElement = profileElement.children[
    offset + 4
  ] as HTMLAnchorElement;
  const descriptionElement = profileElement.children[offset + 7];
  const tagsElement = profileElement.children[offset + 8];

  const resultMeta = parseTags(tagsElement, opts.genres, opts.createTemplate);
  if (cover && cover.nodeName === "IMG") {
    resultMeta.imageUrl = (cover as HTMLImageElement).src;
    const oImage = doc.querySelector("#img_large img");
    if (oImage && oImage.nodeName === "IMG") {
      resultMeta.imageUrl = oImage.getAttribute("data-original") ?? "";
    }
  }

  if (breadCrumbElement) {
    const universeLink = breadCrumbElement.querySelector(
      "span :last-child"
    ) as HTMLAnchorElement;
    if (!universeLink.textContent) {
      resultMeta.universes = [];
    } else {
      resultMeta.universes = universeLink.href.includes("Crossovers")
        ? universeLink.textContent
            .substr(0, universeLink.textContent.length - 10)
            .split(/\s+\+\s+/)
        : [universeLink.textContent];
    }
  }

  if (titleElement.textContent) {
    resultMeta.title = titleElement.textContent.trim();
  }
  if (authorElement.textContent) {
    resultMeta.author.name = authorElement.textContent.trim();
  }
  const match = authorElement.href.match(/\/u\/(\d+)\//i);
  if (match) {
    resultMeta.author.id = +match[1];
  }
  if (descriptionElement.textContent) {
    resultMeta.description = descriptionElement.textContent.trim();
  }
  resultMeta.chapters = chapterElement
    ? parseChapters(resultMeta.id, chapterElement)
    : [
        {
          id: 1,
          title:
            (titleElement.textContent && titleElement.textContent.trim()) ||
            "Chapter 1",
        },
      ];

  return resultMeta;
}

function parseTags(
  tagsElement: Element,
  genres: string[],
  createTemplate: () => HTMLTemplateElement
): Story {
  const result: Story = {
    id: 0,
    title: "",
    author: {
      id: 0,
      name: "",
    },
    description: "",
    chapters: [],
    imageUrl: undefined,
    favorites: 0,
    follows: 0,
    reviews: 0,
    genre: [],
    characters: [],
    language: "",
    published: new Date(),
    updated: undefined,
    rating: "K",
    words: 0,
    universes: [],
    status: "Incomplete",
  };

  const tagsArray = tagsElement.innerHTML.split(/\s+-\s+/);

  if (tagsArray[0] === "Crossover") {
    tagsArray.shift();
    const universes = tagsArray.shift();
    if (universes) {
      result.universes = universes
        .split(/\s+(?:&|&amp;)\s+/)
        .map((u) => u.trim());
    } else {
      result.universes = [];
    }
  }

  if (tagsArray[1].startsWith("Rated:")) {
    result.universes = [tagsArray.shift()!.trim()];
  }

  const tempElement = createTemplate();
  tempElement.innerHTML = tagsArray[0]
    .trim()
    .substring(7)
    .replace(/>.*?\s+(.*?)</, ">$1<");
  result.rating =
    (tempElement.content.firstElementChild
      ? (tempElement.content.firstElementChild as HTMLElement).textContent
      : tempElement.content.textContent) ?? ("?" as any);

  result.language = tagsArray[1].trim();
  result.genre = tagsArray[2].trim().split("/") as any;

  // Some stories might not have a genre tagged. If so, index 2 might be the characters instead, if they are tagged
  if (result.genre.some((g) => !genres.includes(g))) {
    result.genre = [];
    if (!/^\w+:/.test(tagsArray[2])) {
      result.characters = parseCharacters(tagsArray[2]);
    }
  }

  for (let i = 3; i < tagsArray.length; i++) {
    const tagNameMatch = tagsArray[i].match(/^(\w+):/);
    if (!tagNameMatch) {
      if (tagsArray[i] === "Complete") {
        result.status = tagsArray[i] === "Complete" ? "Complete" : "Incomplete";
      } else {
        result.characters = parseCharacters(tagsArray[i]);
      }

      continue;
    }

    const tagName = tagNameMatch[1].toLowerCase();
    const match = tagsArray[i].match(/^.*?:\s+([^]*?)\s*$/);
    const tagValue = (match && match[1]) || "";

    switch (tagName) {
      case "favs":
        result.favorites = +tagValue.replace(/,/g, "");
        break;
      case "reviews":
        const tempReviewsElement = createTemplate();
        tempReviewsElement.innerHTML = tagValue;
        if (tempReviewsElement.content.firstElementChild) {
          const element = tempReviewsElement.content
            .firstElementChild as HTMLElement;
          if (element.textContent) {
            result.reviews = +element.textContent.replace(/,/g, "");
          } else {
            result.reviews = 0;
          }
        } else {
          result.reviews =
            (tempReviewsElement.textContent &&
              +tempReviewsElement.textContent) ||
            0;
        }
        break;
      case "published":
      case "updated":
        const tempTimeElement = createTemplate();
        tempTimeElement.innerHTML = tagValue;
        const child = tempTimeElement.content.firstElementChild;
        if (child && child.hasAttribute("data-xutime")) {
          result[tagName] = new Date(
            +child.getAttribute("data-xutime")! * 1000
          );
        }
        break;
      case "chapters":
        // get chapter count via story.chapters.length instead
        break;
      default:
        if (/^[0-9,.]*$/.test(tagValue)) {
          (result as any)[tagName] = +tagValue.replace(/,/g, "");
        } else {
          (result as any)[tagName] = tagValue;
        }
        break;
    }
  }

  return result;
}

function parseCharacters(tag: string): string[][] {
  const result = [];
  const pairings = tag
    .trim()
    .split(/([\[\]])\s*/)
    .filter((pairing) => pairing.length);
  let inPairing = false;

  for (const pairing of pairings) {
    if (pairing == "[") {
      inPairing = true;
      continue;
    }

    if (pairing == "]") {
      inPairing = false;
      continue;
    }

    const characters = pairing.split(/,\s+/);
    if (!inPairing || characters.length == 1) {
      for (const character of characters) {
        result.push([character]);
      }
    } else {
      result.push(characters);
    }
  }

  return result;
}

function parseChapters(storyId: number, selectElement: ParentNode): Chapter[] {
  const result: Chapter[] = [];

  for (let i = 0; i < selectElement.children.length; i++) {
    const option = selectElement.children[i];
    if (option.tagName !== "OPTION") {
      continue;
    }

    let title = option.textContent;
    if (title && /^\d+\. .+/.test(title)) {
      title = title.substr(title.indexOf(".") + 2);
    }
    if (!title) {
      title = `Chapter ${i + 1}`;
    }

    result.push({
      id: +(option.getAttribute("value") ?? 0),
      title,
    });
  }

  return result;
}

export default parseProfile;
