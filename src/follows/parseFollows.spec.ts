import { loadTestCase } from "../testUtils";
import parseFollows from "./parseFollows";

describe("parseFollows", function () {
  it("should parse main page", async function () {
    const fragment = await loadTestCase("01-main-page.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse story page", async function () {
    const fragment = await loadTestCase("02-dreaming-of-sunshine.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse alerts page", async function () {
    const fragment = await loadTestCase("05-alerts.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toStrictEqual([
      {
        id: 13714539,
        title: "Caterpillar",
        author: {
          id: 13354669,
          name: "grumpywolf",
        },
        category: "Naruto",
        updated: new Date(2021, 1, 5, 0, 0, 0, 0),
        added: new Date(2021, 0, 21, 0, 0, 0, 0),
      },
      {
        id: 11503873,
        title: "Broken Reflection",
        author: {
          id: 2214591,
          name: "Xejis",
        },
        category: "Naruto",
        updated: new Date(2021, 0, 17, 0, 0, 0, 0),
        added: new Date(2020, 11, 1, 0, 0, 0, 0),
      },
      {
        id: 13230340,
        title: "Harry Is A Dragon, And That's Okay",
        author: {
          id: 2996114,
          name: "Saphroneth",
        },
        category: "Harry Potter",
        updated: new Date(2021, 0, 12, 0, 0, 0, 0),
        added: new Date(2019, 7, 11, 0, 0, 0, 0),
      },
      {
        id: 8550820,
        title: "Strange Visitors From Another Century",
        author: {
          id: 2740971,
          name: "Izzyaro",
        },
        category: "Harry Potter",
        updated: new Date(2021, 0, 11, 0, 0, 0, 0),
        added: new Date(2018, 4, 8, 0, 0, 0, 0),
      },
      {
        id: 13564410,
        title: "Kurama Sensei",
        author: {
          id: 8393662,
          name: "Detsella Morningdew",
        },
        category: "Naruto",
        updated: new Date(2021, 0, 9, 0, 0, 0, 0),
        added: new Date(2020, 5, 24, 0, 0, 0, 0),
      },
      {
        id: 6595319,
        title: "The Human Species",
        author: {
          id: 879553,
          name: "Shaded Skies",
        },
        category: "Pokémon",
        updated: new Date(2020, 11, 27, 0, 0, 0, 0),
        added: new Date(2019, 0, 31, 0, 0, 0, 0),
      },

      {
        id: 11115934,
        title: "The Shadow of Angmar",
        author: {
          id: 5291694,
          name: "Steelbadger",
        },
        category: "Harry Potter",
        updated: new Date("2020-12-24T23:00:00.000Z"),
        added: new Date("2021-02-01T23:00:00.000Z"),
      },
      {
        id: 10709411,
        title: "Basilisk-born",
        author: {
          id: 4707996,
          name: "Ebenbild",
        },
        category: "Harry Potter",
        updated: new Date("2020-12-23T23:00:00.000Z"),
        added: new Date("2019-09-06T22:00:00.000Z"),
      },
      {
        id: 9751536,
        title: "To Infinity",
        author: {
          id: 4309541,
          name: "creamofwheat2311",
        },
        category: "Halo",
        updated: new Date("2020-12-19T23:00:00.000Z"),
        added: new Date("2018-04-30T22:00:00.000Z"),
      },
      {
        id: 12694730,
        title: "Whirlwind",
        author: {
          id: 2045639,
          name: "Lynse",
        },
        category: "Danny Phantom",
        updated: new Date("2020-12-18T23:00:00.000Z"),
        added: new Date("2020-05-31T22:00:00.000Z"),
      },
      {
        id: 12088294,
        title: "Animagus at War",
        author: {
          id: 5339762,
          name: "White Squirrel",
        },
        category: "Harry Potter",
        updated: new Date("2020-12-11T23:00:00.000Z"),
        added: new Date("2018-07-28T22:00:00.000Z"),
      },
      {
        id: 9467566,
        title: "Harry Potter and the Banished Monster",
        author: {
          id: 1912967,
          name: "PenguinBandit523",
        },
        category: "Harry Potter",
        updated: new Date("2020-12-09T23:00:00.000Z"),
        added: new Date("2018-05-04T22:00:00.000Z"),
      },
      {
        id: 3315493,
        title: "A Whole New World",
        author: {
          id: 1186762,
          name: "fuzzy-christmas-socks",
        },
        category: "Harry Potter",
        updated: new Date("2020-12-08T23:00:00.000Z"),
        added: new Date("2020-04-12T22:00:00.000Z"),
      },
      {
        id: 5664828,
        title: "Harry Potter and Future's Past",
        author: {
          id: 2036266,
          name: "DriftWood1965",
        },
        category: "Harry Potter",
        updated: new Date("2020-11-24T23:00:00.000Z"),
        added: new Date("2018-04-19T22:00:00.000Z"),
      },
      {
        id: 11836114,
        title: "When Instinct Falls",
        author: {
          id: 7047344,
          name: "upplet",
        },
        category: "Zootopia",
        updated: new Date("2020-11-05T23:00:00.000Z"),
        added: new Date("2019-03-04T23:00:00.000Z"),
      },
      {
        id: 12030727,
        title: "Book one of Thunder God Series: Rise",
        author: {
          id: 1494340,
          name: "TheMadDalek",
        },
        category: "Harry Potter",
        updated: new Date("2020-10-13T22:00:00.000Z"),
        added: new Date("2020-02-01T23:00:00.000Z"),
      },
      {
        id: 11993680,
        title: "American Dragon: The Third Evanescence",
        author: {
          id: 6249085,
          name: "James Wright",
        },
        category: "American Dragon: Jake Long",
        updated: new Date("2020-10-05T22:00:00.000Z"),
        added: new Date("2020-06-02T22:00:00.000Z"),
      },
      {
        id: 12377197,
        title: "On the Illusion of Might",
        author: {
          id: 4815698,
          name: "evevee",
        },
        category: "Halo",
        updated: new Date("2020-09-29T22:00:00.000Z"),
        added: new Date("2020-01-19T23:00:00.000Z"),
      },
      {
        id: 10905401,
        title: "Praeludium and Allegro",
        author: {
          id: 6353707,
          name: "Dante Kreisler",
        },
        category: "Naruto",
        updated: new Date("2020-09-12T22:00:00.000Z"),
        added: new Date("2018-01-01T23:00:00.000Z"),
      },
      {
        id: 12555868,
        title: "The Lost Civilization",
        author: {
          id: 7484374,
          name: "Apollonir",
        },
        category: "Halo",
        updated: new Date("2020-08-21T22:00:00.000Z"),
        added: new Date("2019-12-06T23:00:00.000Z"),
      },
      {
        id: 12610360,
        title: "We, Harry Potter",
        author: {
          id: 5192205,
          name: "wille179",
        },
        category: "Harry Potter",
        updated: new Date("2020-07-01T22:00:00.000Z"),
        added: new Date("2018-04-13T22:00:00.000Z"),
      },
      {
        id: 10571990,
        title: "Nine Tailed Possession",
        author: {
          id: 5505626,
          name: "AlexDnD",
        },
        category: "Naruto",
        updated: new Date("2020-06-21T22:00:00.000Z"),
        added: new Date("2018-01-21T23:00:00.000Z"),
      },
      {
        id: 10991501,
        title: "Hermione Granger and the Serpent's Renaissance",
        author: {
          id: 5555081,
          name: "epsi10n",
        },
        category: "Harry Potter",
        updated: new Date("2020-06-05T22:00:00.000Z"),
        added: new Date("2018-02-12T23:00:00.000Z"),
      },
      {
        id: 13529570,
        title: "Drink Up, Goddess!",
        author: {
          id: 4773043,
          name: "WhoAskedYou",
        },
        category: "Naruto",
        updated: new Date("2020-05-28T22:00:00.000Z"),
        added: new Date("2021-01-19T23:00:00.000Z"),
      },
      {
        id: 10274217,
        title: "When Destiny burns",
        author: {
          id: 3405770,
          name: "Masterdude21",
        },
        category: "Halo",
        updated: new Date("2020-05-17T22:00:00.000Z"),
        added: new Date("2020-02-24T23:00:00.000Z"),
      },
      {
        id: 12365777,
        title: "Marvel's Maelstrom",
        author: {
          id: 4513622,
          name: "Pibbinator",
        },
        category: "Marvel",
        updated: new Date("2020-05-04T22:00:00.000Z"),
        added: new Date("2019-12-06T23:00:00.000Z"),
      },
      {
        id: 12519346,
        title: "The Second XCOM Viper",
        author: {
          id: 4902378,
          name: "The Imperator 2 you",
        },
        category: "X-Com",
        updated: new Date("2020-05-02T22:00:00.000Z"),
        added: new Date("2019-07-06T22:00:00.000Z"),
      },
      {
        id: 12046450,
        title: "On Dead Wings",
        author: {
          id: 2221413,
          name: "Tsume Yuki",
        },
        category: "Harry Potter",
        updated: new Date("2020-04-30T22:00:00.000Z"),
        added: new Date("2019-08-04T22:00:00.000Z"),
      },
      {
        id: 13258001,
        title: "Voyage unto Infinity",
        author: {
          id: 8291327,
          name: "supertruckin",
        },
        category: "Mass Effect",
        updated: new Date("2020-02-24T23:00:00.000Z"),
        added: new Date("2020-01-14T23:00:00.000Z"),
      },
      {
        id: 13288326,
        title: "Echoes of the Night",
        author: {
          id: 2668930,
          name: "Superbun",
        },
        category: "How to Train Your Dragon",
        updated: new Date("2020-02-09T23:00:00.000Z"),
        added: new Date("2019-07-06T22:00:00.000Z"),
      },
      {
        id: 12307781,
        title: "Heroes Assemble!",
        author: {
          id: 5643202,
          name: "Stargon1",
        },
        category: "Harry Potter",
        updated: new Date("2020-02-04T23:00:00.000Z"),
        added: new Date("2021-02-01T23:00:00.000Z"),
      },
      {
        id: 13025350,
        title: "From Ruin",
        author: {
          id: 11062375,
          name: "GraeFoxx",
        },
        category: "Harry Potter",
        updated: new Date("2020-01-26T23:00:00.000Z"),
        added: new Date("2020-11-19T23:00:00.000Z"),
      },
      {
        id: 11126659,
        title: "Monster Falls",
        author: {
          id: 4546015,
          name: "Queen Flara",
        },
        category: "Gravity Falls",
        updated: new Date("2019-12-26T23:00:00.000Z"),
        added: new Date("2016-12-24T23:00:00.000Z"),
      },
      {
        id: 10913988,
        title: "Three's A Crowd (But Pack Sticks Together)",
        author: {
          id: 6364223,
          name: "ShiiroiKitsune21",
        },
        category: "Naruto",
        updated: new Date("2019-12-23T23:00:00.000Z"),
        added: new Date("2019-03-23T23:00:00.000Z"),
      },
      {
        id: 10642894,
        title: "Azuveya: Fury Oh Fury",
        author: {
          id: 1617744,
          name: "Kira Kyuu",
        },
        category: "Harry Potter",
        updated: new Date("2019-12-17T23:00:00.000Z"),
        added: new Date("2020-01-07T23:00:00.000Z"),
      },
      {
        id: 13391615,
        title: "Pack",
        author: {
          id: 1282867,
          name: "mjimeyg",
        },
        category: "Harry Potter",
        updated: new Date("2019-09-27T22:00:00.000Z"),
        added: new Date("2019-09-28T22:00:00.000Z"),
      },
      {
        id: 13159911,
        title: "For Earth and All Her Colonies",
        author: {
          id: 10746004,
          name: "GADPELLAEON",
        },
        category: "Halo",
        updated: new Date("2019-09-12T22:00:00.000Z"),
        added: new Date("2020-01-05T23:00:00.000Z"),
      },
      {
        id: 13323228,
        title:
          "REPOST-Vox Corporis : Original Author-MissAnnThropic NOT MY STORY",
        author: {
          id: 8683300,
          name: "StorytellerNew",
        },
        category: "Harry Potter",
        updated: new Date("2019-09-09T22:00:00.000Z"),
        added: new Date("2021-02-01T23:00:00.000Z"),
      },
      {
        id: 9313254,
        title: "Iryo-nin Kasa (医療忍傘)",
        author: {
          id: 620686,
          name: "Vaengir",
        },
        category: "Naruto",
        updated: new Date("2019-09-02T22:00:00.000Z"),
        added: new Date("2018-02-12T23:00:00.000Z"),
      },
      {
        id: 13217429,
        title: "Something Beautiful, in a Terrible sort of Way",
        author: {
          id: 2221413,
          name: "Tsume Yuki",
        },
        category: "Harry Potter",
        updated: new Date("2019-07-23T22:00:00.000Z"),
        added: new Date("2019-08-04T22:00:00.000Z"),
      },
      {
        id: 12579046,
        title: "Towards the Sun",
        author: {
          id: 2088474,
          name: "ImmemorialMemory",
        },
        category: "Harry Potter",
        updated: new Date("2019-07-19T22:00:00.000Z"),
        added: new Date("2018-02-10T23:00:00.000Z"),
      },
      {
        id: 12482620,
        title: "Heir of Destruction",
        author: {
          id: 6667990,
          name: "blackbelt256",
        },
        category: "Dragon Ball Z",
        updated: new Date("2019-06-18T22:00:00.000Z"),
        added: new Date("2020-03-16T23:00:00.000Z"),
      },
      {
        id: 9384607,
        title: "Dragonearth",
        author: {
          id: 4310240,
          name: "darkfire1220",
        },
        category: "Fairy Tail",
        updated: new Date("2019-06-12T22:00:00.000Z"),
        added: new Date("2018-07-04T22:00:00.000Z"),
      },
      {
        id: 10055817,
        title: "Mass Effect: The New Journey",
        author: {
          id: 1186800,
          name: "Arashi the Solar Phoenix",
        },
        category: "Halo",
        updated: new Date("2019-06-10T22:00:00.000Z"),
        added: new Date("2019-12-07T23:00:00.000Z"),
      },
      {
        id: 11169912,
        title: "Shadow of the Night",
        author: {
          id: 2668930,
          name: "Superbun",
        },
        category: "How to Train Your Dragon",
        updated: new Date("2019-05-16T22:00:00.000Z"),
        added: new Date("2018-04-15T22:00:00.000Z"),
      },
      {
        id: 10863685,
        title: "The White Warg",
        author: {
          id: 5478583,
          name: "TalesofErynGalen",
        },
        category: "Harry Potter",
        updated: new Date("2019-04-19T22:00:00.000Z"),
        added: new Date("2018-04-21T22:00:00.000Z"),
      },
      {
        id: 7347955,
        title: "Dreaming of Sunshine",
        author: {
          id: 315314,
          name: "Silver Queen",
        },
        category: "Naruto",
        updated: new Date("2019-03-27T23:00:00.000Z"),
        added: new Date("2018-06-19T22:00:00.000Z"),
      },
      {
        id: 12058516,
        title: "The Reclamation of Black Magic",
        author: {
          id: 5869599,
          name: "ShayaLonnie",
        },
        category: "Harry Potter",
        updated: new Date("2019-03-13T23:00:00.000Z"),
        added: new Date("2019-02-03T23:00:00.000Z"),
      },
      {
        id: 13229284,
        title: "The Light Beneath the Waves",
        author: {
          id: 2668930,
          name: "Superbun",
        },
        category: "How to Train Your Dragon",
        updated: new Date("2019-03-08T23:00:00.000Z"),
        added: new Date("2019-07-06T22:00:00.000Z"),
      },
      {
        id: 12562750,
        title: "The Incredible Babysitter",
        author: {
          id: 4297919,
          name: "Aqualisa1995",
        },
        category: "Harry Potter",
        updated: new Date("2019-02-25T23:00:00.000Z"),
        added: new Date("2019-03-02T23:00:00.000Z"),
      },
    ]);
  });

  it("should parse story list", async function () {
    const fragment = await loadTestCase("06-hp-naruto-crossovers.html");
    const parsed = await parseFollows(fragment);

    expect(parsed).toBeUndefined();
  });
});
