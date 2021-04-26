# FanFiction.net Parser

<a href="https://github.com/amur-tiger/ffn-parser/actions/workflows/ci.yml">
<img src="https://github.com/amur-tiger/ffn-parser/actions/workflows/ci.yml/badge.svg" alt="CI" />
</a>

<a href="https://www.npmjs.com/package/ffn-parser">
<img alt="License" src="https://img.shields.io/npm/v/ffn-parser" />
</a>

<a href="https://github.com/amur-tiger/ffn-parser/issues">
<img alt="License" src="https://img.shields.io/github/issues/amur-tiger/ffn-parser" />
</a>

<a href="https://github.com/amur-tiger/ffn-parser/blob/master/LICENSE.md">
<img alt="License" src="https://img.shields.io/github/license/amur-tiger/ffn-parser" />
</a>

<hr />

Since [fanfiction.net](https://www.fanfiction.net) does not have an API, information about stories hosted there
can only be retrieved by scraping the webpages themselves. Unfortunately, bits of information are sometimes
formatted differently or are just thrown together, making it very hard to extract the needed information.

This library aims to provide a set of functions to parse the webpages and extract the information in a
machine-readable format.

⚠ This library follows semantic versioning. It is not stable yet, meaning that newer versions may break
backwards-compatibility at any time.

## Installation

Install this library via `npm` or `yarn`.

```shell
npm install ffn-parser
```

## Usage

This library does not download any pages from [fanfiction.net](https://www.fanfiction.net). You must download
these pages yourself using any library of your choice. Please note that fanfiction.net is rate limited. Do not
download too many pages at once and wait the indicated amount of time if you hit the limit.

```typescript
import { parseStory } from "ffn-parser";

// the id of the story you want to analyze
const storyId = 1;

const response = await fetch(`https://www.fanfiction.net/s/${storyId}`);
const html = await response.text();
const template = document.createElement("template");
template.innerHTML = html;

// info contains all the extracted information
const info = await parseStory(template.content);
```

Since this library needs to analyze the DOM of the page, a way to create DOM elements is needed. You might need
to install a tool like [JSDOM](https://github.com/jsdom/jsdom) if you want to use this library on NodeJS.

For now, three functions are provided.

* `parseStory`, which can be used on story pages like in the example above to extract information about a story.
* `parseFollows`, which can be used on the alerts and favorites list in the user settings.
* `parseStoryList`, which can be used on lists of stories such as when searching for crossovers or exploring the stories in a community.

The latter two functions do not provide as much information about a story as `parseStory`, since the HTML pages they
parse do not contain any more information.

This library also provides full Typescript support. The returned types are the best place to inspect what
information the functions extract - or just execute them and see what happens.
