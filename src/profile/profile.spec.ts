import { JSDOM } from "jsdom";
import parseProfile from "./profile";

const params = [
  {
    name: "with image",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="bla">LOTR</a>
		</span>
	</div>
	<div id="profile_top">
		<span><img src="/src/img.jpg" /></span>
		<button><!-- follow+fav button --></button>
		<b>title</b>
		<span>by</span>
		<a href="/u/678/author">author</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>description</div>
		<span>
			Rated: <a>M</a> - Sindarin - Fantasy - Chapters: 33 - Words: 1,234 - Reviews: <a>123</a> - Favs: 345 - Follows:
			567 - Updated: <span data-xutime="1517639271">Feb 3</span> - Published:
			<span data-xutime="1426879324">Mar 20, 2015</span> - id: 12345678
		</span>
	</div>
	<select id="chap_select">
		<option value="1">Chapter 1</option>
		<option value="2">Chapter 2</option>
	</select>
</div>`),
    expected: {
      title: "title",
      author: {
        id: 678,
        name: "author",
      },
      description: "description",
      imageUrl: "/src/img.jpg",
      rating: "M",
      language: "Sindarin",
      genre: ["Fantasy"],
      characters: [],
      chapters: [
        {
          id: 1,
          title: "Chapter 1",
        },
        {
          id: 2,
          title: "Chapter 2",
        },
      ],
      words: 1234,
      reviews: 123,
      favorites: 345,
      follows: 567,
      updated: new Date(1517639271000),
      published: new Date(1426879324000),
      id: 12345678,
      universes: ["LOTR"],
      status: "Incomplete",
    },
  },
  {
    name: "without image",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="bla">Star Trek</a>
		</span>
	</div>
	<div id="profile_top">
		<button><!-- follow+fav button --></button>
		<b>story</b>
		<span>by</span>
		<a href="/u/345/guy">guy</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>something</div>
		<span>
			Rated: <a>T</a> - Klingon - Sci-Fi - Chapters: 19 - Words: 3,210 - Reviews: <a>123</a> - Favs: 345 - Follows:
			567 - Updated: <span data-xutime="1517639271">Feb 3</span> - Published:
			<span data-xutime="1426879324">Mar 20, 2015</span> - Status: Complete - id: 12345678
		</span>
	</div>
	<select id="chap_select">
		<option value="1">Intro</option>
	</select>
</div>`),
    expected: {
      title: "story",
      author: {
        id: 345,
        name: "guy",
      },
      description: "something",
      imageUrl: undefined,
      rating: "T",
      language: "Klingon",
      genre: ["Sci-Fi"],
      characters: [],
      chapters: [
        {
          id: 1,
          title: "Intro",
        },
      ],
      words: 3210,
      reviews: 123,
      favorites: 345,
      follows: 567,
      updated: new Date(1517639271000),
      published: new Date(1426879324000),
      id: 12345678,
      universes: ["Star Trek"],
      status: "Complete",
    },
  },
  {
    name: "tags with garbage data",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="Crossovers/bla">Naruto + Books Crossover</a>
		</span>
	</div>
	<div id="profile_top">
		<span><img src="/image/12345/75/" width="75" height="100"></span>
		<button><!-- follow+fav button --></button>
		<b>The Title</b>
		<span><div style="height:5px"></div>By:</span>
		<a href="/u/12345/author">Author</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>Description.</div>
		<span class="xgray xcontrast_txt">Rated: <a>Fiction  T</a>
		 - English - Adventure -  Naruto U., Shikamaru N., OC - Chapters: 145   - Words: 692,018 - Reviews:
		 <a href="/r/12345/">21,234</a> - Favs: 13,936 - Follows: 13,707 - Updated: <span data-xutime="1520735917">Mar 11
		 </span> - Published: <span data-xutime="1315014342">Sep 3, 2011</span> - id: 123456 </span>
	</div>
	<select id="chap_select">
		<option value="1">Intro</option>
	</select>
</div>
`),
    expected: {
      title: "The Title",
      author: {
        id: 12345,
        name: "Author",
      },
      description: "Description.",
      imageUrl: "/image/12345/75/",
      rating: "T",
      language: "English",
      genre: ["Adventure"],
      characters: [["Naruto U."], ["Shikamaru N."], ["OC"]],
      chapters: [
        {
          id: 1,
          title: "Intro",
        },
      ],
      words: 692018,
      reviews: 21234,
      favorites: 13936,
      follows: 13707,
      updated: new Date(1520735917000),
      published: new Date(1315014342000),
      id: 123456,
      universes: ["Naruto", "Books"],
      status: "Incomplete",
    },
  },
  {
    name: "with missing chapter select",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="bla">Some Book + Another</a>
		</span>
	</div>
	<div id="profile_top">
		<span><img src="/src/img.jpg" /></span>
		<button><!-- follow+fav button --></button>
		<b>title</b>
		<span>by</span>
		<a href="/u/678/author">author</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>description</div>
		<span>
			Rated: <a>M</a> - Quenya - Drama/Fantasy - [Romeo, Juliet] Steve - Chapters: 33 - Words: 1,234 - Reviews:
			<a>123</a> - Favs: 345 - Follows: 567 - Updated: <span data-xutime="1517639271">Feb 3</span> - Published:
			<span data-xutime="1426879324">Mar 20, 2015</span> - id: 12345678
		</span>
	</div>
	<div id="storytext">Two words.</div>
</div>`),
    expected: {
      title: "title",
      author: {
        id: 678,
        name: "author",
      },
      description: "description",
      imageUrl: "/src/img.jpg",
      rating: "M",
      language: "Quenya",
      genre: ["Drama", "Fantasy"],
      characters: [["Romeo", "Juliet"], ["Steve"]],
      chapters: [
        {
          id: 1,
          title: "title",
        },
      ],
      words: 1234,
      reviews: 123,
      favorites: 345,
      follows: 567,
      updated: new Date(1517639271000),
      published: new Date(1426879324000),
      id: 12345678,
      universes: ["Some Book + Another"],
      status: "Incomplete",
    },
  },
  {
    name: "with missing genre tag",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="bla">Naruto</a>
		</span>
	</div>
	<div id="profile_top">
		<span><img src="/image/12345/75/" width="75" height="100"></span>
		<button><!-- follow+fav button --></button>
		<b>The Title</b>
		<span><div style="height:5px"></div>By:</span>
		<a href="/u/12345/author">Author</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>Description.</div>
		<span class="xgray xcontrast_txt">Rated: <a>Fiction  T</a>
		 - English - Naruto U., Shikamaru N., OC - Chapters: 145   - Words: 692,018 - Reviews:
		 <a href="/r/12345/">21,234</a> - Favs: 13,936 - Follows: 13,707 - Updated: <span data-xutime="1520735917">Mar 11
		 </span> - Published: <span data-xutime="1315014342">Sep 3, 2011</span> - id: 123456 </span>
	</div>
	<select id="chap_select">
		<option value="1">Intro</option>
	</select>
</div>
`),
    expected: {
      title: "The Title",
      author: {
        id: 12345,
        name: "Author",
      },
      description: "Description.",
      imageUrl: "/image/12345/75/",
      rating: "T",
      language: "English",
      genre: [],
      characters: [["Naruto U."], ["Shikamaru N."], ["OC"]],
      chapters: [
        {
          id: 1,
          title: "Intro",
        },
      ],
      words: 692018,
      reviews: 21234,
      favorites: 13936,
      follows: 13707,
      updated: new Date(1520735917000),
      published: new Date(1315014342000),
      id: 123456,
      universes: ["Naruto"],
      status: "Incomplete",
    },
  },
  {
    name: "with missing update time",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a href="bla">X-Over</a>
		</span>
	</div>
	<div id="profile_top">
		<span><img src="/image/12345/75/" width="75" height="100"></span>
		<button><!-- follow+fav button --></button>
		<b>The Title</b>
		<span><div style="height:5px"></div>By:</span>
		<a href="/u/12345/author">Author</a>
		<span><!-- mail icon --></span>
		<a><!-- message link --></a>
		<div>Description.</div>
		<span class="xgray xcontrast_txt">Rated: <a>Fiction  T</a>
		 - English - Chapters: 1 - Words: 698 - Favs: 2 - Follows: 5 - Published:
		 <span data-xutime="1315014342">Sep 3, 2011</span> - id: 123456 </span>
	</div>
	<select id="chap_select">
		<option value="1">Intro</option>
	</select>
</div>
`),
    expected: {
      title: "The Title",
      author: {
        id: 12345,
        name: "Author",
      },
      description: "Description.",
      imageUrl: "/image/12345/75/",
      rating: "T",
      language: "English",
      genre: [],
      characters: [],
      chapters: [
        {
          id: 1,
          title: "Intro",
        },
      ],
      words: 698,
      reviews: 0,
      favorites: 2,
      follows: 5,
      updated: undefined,
      published: new Date(1315014342000),
      id: 123456,
      universes: ["X-Over"],
      status: "Incomplete",
    },
  },
  {
    name: "the bare-bones",
    fragment: JSDOM.fragment(`
<div id="test-wrapper">
	<div id="pre_story_links">
		<span>
			<a>Misc</a>
			<span></span>
			<a>Misc. Games</a>
		</span>
	</div>
	<div id="profile_top" style="min-height:112px;">
		<span><img class="cimage " src="/url/to/image" width="75" height="100"></span>
		<button>Follow/Fav</button>
		<b>Test</b>
	    <span><div style="height:5px"></div>By:</span>
	    <a href="/u/4680651/The-Author">The Author</a>
	    <span class="icon-mail-1  xcontrast_txt"></span>
	    <a title="Send Private Message" href="https://www.fanfiction.net/pm2/post.php"></a>
		<div>Test, please disregard</div>
		<span class="xgray xcontrast_txt">Rated: <a class="xcontrast_txt" href="https://www.fictionratings.com/" target="rating" rel="noreferrer">Fiction  K</a>
		 - English - Chapters: 2   - Words: 3 - Published: <span data-xutime="1588439040">1m ago</span> - id: 13571857 </span>
	</div>
	<select id="chap_select" title="Chapter Navigation" name="chapter" >
	    <option value="1" selected="">1. test</option>
	    <option value="2">2. Chapter 2</option>
      </select>
</div>
`),
    expected: {
      id: 13571857,
      title: "Test",
      author: {
        id: 4680651,
        name: "The Author",
      },
      description: "Test, please disregard",
      chapters: [
        {
          id: 1,
          title: "test",
        },
        {
          id: 2,
          title: "Chapter 2",
        },
      ],
      imageUrl: "/url/to/image",
      favorites: 0,
      follows: 0,
      reviews: 0,
      genre: [],
      characters: [],
      language: "English",
      published: new Date(1588439040000),
      updated: undefined,
      rating: "K",
      words: 3,
      universes: ["Misc. Games"],
      status: "Incomplete",
    },
  },
];

params.forEach(function (param) {
  it(`should parse ${param.name}`, function () {
    const result = parseProfile(param.fragment);
    expect(result).toStrictEqual(param.expected);
  });
});
