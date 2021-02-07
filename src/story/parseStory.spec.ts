import parseStory from "./parseStory";
import { loadTestCase } from "../testUtils";

describe("parseStory", function () {
  it("should parse main page", async function () {
    const fragment = await loadTestCase("01-main-page.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toBeUndefined();
  });

  it("should parse story with image", async function () {
    const fragment = await loadTestCase("02-dreaming-of-sunshine.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 7347955,
      title: "Dreaming of Sunshine",
      author: {
        id: 315314,
        name: "Silver Queen",
      },
      description:
        "Life as a ninja. It starts with confusion and terror and doesn't get any better from there. OC Self-insert. No pairings.",
      chapters: [
        {
          id: 1,
          title: "Prologue",
        },
        {
          id: 2,
          title: "Academy Arc: Chapter 1",
        },
        {
          id: 3,
          title: "Academy Arc: Chapter 2",
        },
        {
          id: 4,
          title: "Academy Arc: Chapter 3",
        },
        {
          id: 5,
          title: "Academy Arc: Chapter 4",
        },
        {
          id: 6,
          title: "Graduation Arc: Chapter 5",
        },
        {
          id: 7,
          title: "Graduation Arc: Chapter 6",
        },
        {
          id: 8,
          title: "Graduation Arc: Chapter 7",
        },
        {
          id: 9,
          title: "Graduation Arc: Chapter 8",
        },
        {
          id: 10,
          title: "Land of Waves Arc: Chapter 9",
        },
        {
          id: 11,
          title: "Land of Waves Arc: Chapter 10",
        },
        {
          id: 12,
          title: "Land of Waves Arc: Chapter 11",
        },
        {
          id: 13,
          title: "Land of Waves Arc: Chapter 12",
        },
        {
          id: 14,
          title: "Land of Waves Arc: Chapter 13",
        },
        {
          id: 15,
          title: "Land of Waves Arc: Chapter 14",
        },
        {
          id: 16,
          title: "Land of Waves Arc: Chapter 15",
        },
        {
          id: 17,
          title: "Chunin Exams Arc: Chapter 16",
        },
        {
          id: 18,
          title: "Chunin Exams Arc: Chapter 17",
        },
        {
          id: 19,
          title: "Chunin Exams Arc - First: Chapter 18",
        },
        {
          id: 20,
          title: "Chunin Exams Arc - First: Chapter 19",
        },
        {
          id: 21,
          title: "Chunin Exams Arc - Second: Chapter 20",
        },
        {
          id: 22,
          title: "Chunin Exams Arc - Second: Chapter 21",
        },
        {
          id: 23,
          title: "Chunin Exams Arc - Second: Chapter 22",
        },
        {
          id: 24,
          title: "Chunin Exams Arc - Second: Chapter 23",
        },
        {
          id: 25,
          title: "Chunin Exams Arc - Second: Chapter 24",
        },
        {
          id: 26,
          title: "Chunin Exams Arc - Break: Chapter 25",
        },
        {
          id: 27,
          title: "Chunin Exams Arc - Break: Chapter 26",
        },
        {
          id: 28,
          title: "Chunin Exams Arc - Break: Chapter 27",
        },
        {
          id: 29,
          title: "Chunin Exams Arc - Break: Chapter 28",
        },
        {
          id: 30,
          title: "Chunin Exams Arc - Break: Chapter 29",
        },
        {
          id: 31,
          title: "Chunin Exams Arc - Break: Chapter 30",
        },
        {
          id: 32,
          title: "Chunin Exams Arc - Third: Chapter 31",
        },
        {
          id: 33,
          title: "Chunin Exams Arc - Third: Chapter 32",
        },
        {
          id: 34,
          title: "Chunin Exams Arc - Third: Chapter 33",
        },
        {
          id: 35,
          title: "Chunin Exams Arc - Invasion: Chapter 34",
        },
        {
          id: 36,
          title: "Chunin Exams Arc - Invasion: Chapter 35",
        },
        {
          id: 37,
          title: "Chunin Exams Arc - Invasion: Chapter 36",
        },
        {
          id: 38,
          title: "Chunin Exams Arc - Invasion: Chapter 37",
        },
        {
          id: 39,
          title: "Chunin Exams Arc - Invasion: Chapter 38",
        },
        {
          id: 40,
          title: "Chunin Exams Arc - Invasion: Chapter 39",
        },
        {
          id: 41,
          title: "Tsukiyomi Arc: Chapter 40",
        },
        {
          id: 42,
          title: "Tsukiyomi Arc: Chapter 41",
        },
        {
          id: 43,
          title: "Tsukiyomi Arc: Chapter 42",
        },
        {
          id: 44,
          title: "Tsukiyomi Arc: Chapter 43",
        },
        {
          id: 45,
          title: "Search and Rescue Arc: Chapter 44",
        },
        {
          id: 46,
          title: "Search and Rescue Arc: Chapter 45",
        },
        {
          id: 47,
          title: "Land of Snow Arc: Chapter 46",
        },
        {
          id: 48,
          title: "Land of Snow Arc: Chapter 47",
        },
        {
          id: 49,
          title: "Land of Snow Arc: Chapter 48",
        },
        {
          id: 50,
          title: "Land of Snow Arc: Chapter 49",
        },
        {
          id: 51,
          title: "Land of Snow Arc: Chapter 50",
        },
        {
          id: 52,
          title: "Land of Snow Arc: Chapter 51",
        },
        {
          id: 53,
          title: "Land of Snow Arc: Chapter 52",
        },
        {
          id: 54,
          title: "Hidden Waterfall Arc: Chapter 53",
        },
        {
          id: 55,
          title: "Hidden Waterfall Arc: Chapter 54",
        },
        {
          id: 56,
          title: "Hidden Waterfall Arc: Chapter 55",
        },
        {
          id: 57,
          title: "Land of Tea Arc: Chapter 56",
        },
        {
          id: 58,
          title: "Sound Four Arc: Chapter 57",
        },
        {
          id: 59,
          title: "Sound Four Arc: Chapter 58",
        },
        {
          id: 60,
          title: "Sound Four Arc: Chapter 59",
        },
        {
          id: 61,
          title: "Sound Four Arc: Chapter 60",
        },
        {
          id: 62,
          title: "Sound Four Arc: Chapter 61",
        },
        {
          id: 63,
          title: "Sound Four Arc: Chapter 62",
        },
        {
          id: 64,
          title: "Sound Four Arc: Chapter 63",
        },
        {
          id: 65,
          title: "Sound Four Arc: Chapter 64",
        },
        {
          id: 66,
          title: "Sound Four Arc: Chapter 65",
        },
        {
          id: 67,
          title: "Stones of Gelel Arc: Chapter 66",
        },
        {
          id: 68,
          title: "Stones of Gelel Arc: Chapter 67",
        },
        {
          id: 69,
          title: "Stones of Gelel Arc: Chapter 68",
        },
        {
          id: 70,
          title: "Stones of Gelel Arc: Chapter 69",
        },
        {
          id: 71,
          title: "Stones of Gelel Arc: Chapter 70",
        },
        {
          id: 72,
          title: "Stones of Gelel Arc: Chapter 71",
        },
        {
          id: 73,
          title: "Yakumo Arc: Chapter 72",
        },
        {
          id: 74,
          title: "Yakumo Arc: Chapter 73",
        },
        {
          id: 75,
          title: "Yakumo Arc: Chapter 74",
        },
        {
          id: 76,
          title: "Yakumo Arc: Chapter 75",
        },
        {
          id: 77,
          title: "Trap Master Arc: Chapter 76",
        },
        {
          id: 78,
          title: "Trap Master Arc: Chapter 77",
        },
        {
          id: 79,
          title: "Sealing Arc: Chapter 78",
        },
        {
          id: 80,
          title: "Sealing Arc: Chapter 79",
        },
        {
          id: 81,
          title: "Land of Stone Arc: Chapter 80",
        },
        {
          id: 82,
          title: "Land of Stone Arc: Chapter 81",
        },
        {
          id: 83,
          title: "Haunted House Arc: Chapter 82",
        },
        {
          id: 84,
          title: "Haunted House Arc: Chapter 83",
        },
        {
          id: 85,
          title: "Land of Birds Arc: Chapter 84",
        },
        {
          id: 86,
          title: "Land of Birds Arc: Chapter 85",
        },
        {
          id: 87,
          title: "Land of Birds Arc: Chapter 86",
        },
        {
          id: 88,
          title: "Land of Birds Arc: Chapter 87",
        },
        {
          id: 89,
          title: "Grass Chunin Exam Arc: Chapter 88",
        },
        {
          id: 90,
          title: "Grass Chunin Exam Arc: Chapter 89",
        },
        {
          id: 91,
          title: "Grass Chunin Exam Arc: Chapter 90",
        },
        {
          id: 92,
          title: "Grass Chunin Exam Arc -1st: Chapter 91",
        },
        {
          id: 93,
          title: "Grass Chunin Exam Arc - 2nd: Chapter 92",
        },
        {
          id: 94,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 93",
        },
        {
          id: 95,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 94",
        },
        {
          id: 96,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 95",
        },
        {
          id: 97,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 96",
        },
        {
          id: 98,
          title: "Grass Chunin Exam Arc - 3rd: Chapter 97",
        },
        {
          id: 99,
          title: "Grass Chunin Exam Arc: Chapter 98",
        },
        {
          id: 100,
          title: "Sensory Squad Arc: Chapter 99",
        },
        {
          id: 101,
          title: "Sensory Squad Arc: Chapter 100",
        },
        {
          id: 102,
          title: "Sensory Squad Arc: Chapter 101",
        },
        {
          id: 103,
          title: "Sensory Squad Arc: Chapter 102",
        },
        {
          id: 104,
          title: "Sensory Squad Arc: Chapter 103",
        },
        {
          id: 105,
          title: "Storage Seal Arc: Chapter 104",
        },
        {
          id: 106,
          title: "Storage Seal Arc: Chapter 105",
        },
        {
          id: 107,
          title: "Intelligence Division Arc: Chapter 106",
        },
        {
          id: 108,
          title: "Intelligence Division Arc: Chapter 107",
        },
        {
          id: 109,
          title: "Intelligence Division Arc: Chapter 108",
        },
        {
          id: 110,
          title: "Intelligence Division Arc: Chapter 109",
        },
        {
          id: 111,
          title: "Intelligence Division Arc: Chapter 110",
        },
        {
          id: 112,
          title: "Land of the Moon Arc: Chapter 111",
        },
        {
          id: 113,
          title: "Land of the Moon Arc: Chapter 112",
        },
        {
          id: 114,
          title: "Land of the Moon Arc: Chapter 113",
        },
        {
          id: 115,
          title: "Land of the Moon Arc: Chapter 114",
        },
        {
          id: 116,
          title: "Land of the Moon Arc: Chapter 115",
        },
        {
          id: 117,
          title: "Land of the Moon Arc: Chapter 116",
        },
        {
          id: 118,
          title: "Land of the Moon Arc: Chapter 117",
        },
        {
          id: 119,
          title: "Land of the Moon Arc: Chapter 118",
        },
        {
          id: 120,
          title: "Lost Child Arc: Chapter 119",
        },
        {
          id: 121,
          title: "Lost Child Arc: Chapter 120",
        },
        {
          id: 122,
          title: "Fire Temple Arc: Chapter 121",
        },
        {
          id: 123,
          title: "Hospital Arc: Chapter 122",
        },
        {
          id: 124,
          title: "Hospital Arc: Chapter 123",
        },
        {
          id: 125,
          title: "Hospital Arc: Chapter 124",
        },
        {
          id: 126,
          title: "Hospital Arc: Chapter 125",
        },
        {
          id: 127,
          title: "Hospital Arc: Chapter 126",
        },
        {
          id: 128,
          title: "Hospital Arc: Chapter 127",
        },
        {
          id: 129,
          title: "Land of Hot Springs Arc: Chapter 128",
        },
        {
          id: 130,
          title: "Land of Hot Springs Arc: Chapter 129",
        },
        {
          id: 131,
          title: "Land of Hot Springs Arc: Chapter 130",
        },
        {
          id: 132,
          title: "Land of Hot Springs Arc: Chapter 131",
        },
        {
          id: 133,
          title: "Land of Hot Springs Arc: Chapter 132",
        },
        {
          id: 134,
          title: "Land of Hot Springs Arc: Chapter 133",
        },
        {
          id: 135,
          title: "Land of Hot Springs Arc: Chapter 134",
        },
        {
          id: 136,
          title: "Land of Hot Springs Arc: Chapter 135",
        },
        {
          id: 137,
          title: "Land of Hot Springs Arc: Chapter 136",
        },
        {
          id: 138,
          title: "Land of Hot Springs Arc: Chapter 137",
        },
        {
          id: 139,
          title: "Hidden Mist Arc: Chapter 138",
        },
        {
          id: 140,
          title: "Hidden Mist Arc: Chapter 139",
        },
        {
          id: 141,
          title: "Hidden Mist Arc: Chapter 140",
        },
        {
          id: 142,
          title: "Hidden Mist Arc: Chapter 141",
        },
        {
          id: 143,
          title: "Hidden Mist Arc: Chapter 142",
        },
        {
          id: 144,
          title: "ANBU Arc: Chapter 143",
        },
        {
          id: 145,
          title: "ANBU Arc: Chapter 144",
        },
        {
          id: 146,
          title: "Police Arc: Chapter 145",
        },
        {
          id: 147,
          title: "Police Arc: Chapter 146",
        },
        {
          id: 148,
          title: "Police Arc: Chapter 147",
        },
        {
          id: 149,
          title: "Police Arc: Chapter 148",
        },
        {
          id: 150,
          title: "Police Arc: Chapter 149",
        },
        {
          id: 151,
          title: "Rice Fields Arc: Chapter 150",
        },
      ],
      imageUrl: "/image/1740448/180/",
      favorites: 19089,
      follows: 18895,
      reviews: 24172,
      genre: ["Adventure"],
      characters: [["Naruto U."], ["Shikamaru N."], ["OC"]],
      language: "English",
      published: new Date("2011-09-03T01:45:42Z"),
      updated: new Date("2019-03-28T07:40:16Z"),
      rating: "T",
      words: 716431,
      universes: ["Naruto"],
      status: "Incomplete",
    });
  });

  it("should parse story without image", async function () {
    const fragment = await loadTestCase("03-team-8.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 2731239,
      title: "Team 8",
      author: {
        id: 884184,
        name: "S'TarKan",
      },
      description:
        "What if Naruto had been selected for a different team? What if he'd had a different mentor? Who would guess the consequences would be so large?",
      chapters: [
        {
          id: 1,
          title: "The Power of Observation",
        },
        {
          id: 2,
          title: "A Painfully Early Morning",
        },
        {
          id: 3,
          title: "First Mission",
        },
        {
          id: 4,
          title: "Geniuses of Hard Work",
        },
        {
          id: 5,
          title: "Difficult Preparations",
        },
        {
          id: 6,
          title: "The Journey to the Borderlands",
        },
        {
          id: 7,
          title: "First Blood",
        },
        {
          id: 8,
          title: "Revelations",
        },
        {
          id: 9,
          title: "Returning to Konoha",
        },
        {
          id: 10,
          title: "Complex Confrontations",
        },
        {
          id: 11,
          title: "My Dinner with Aburame",
        },
        {
          id: 12,
          title: "Stress Testing",
        },
        {
          id: 13,
          title: "The Forest of Death",
        },
        {
          id: 14,
          title: "Preliminary Mayhem",
        },
        {
          id: 15,
          title: "A Wretched Recovery",
        },
        {
          id: 16,
          title: "Mortal Combat",
        },
        {
          id: 17,
          title: "All That and a Bag of Chips",
        },
        {
          id: 18,
          title: "A Dangerous Pursuit",
        },
        {
          id: 19,
          title: "A Fearful Fallout",
        },
        {
          id: 20,
          title: "Deadly Consequences",
        },
        {
          id: 21,
          title: "A Pyrrhic Victory",
        },
        {
          id: 22,
          title: "Endings and Beginnings",
        },
        {
          id: 23,
          title: "Servants, Sparring, and Summons",
        },
        {
          id: 24,
          title: "Reunions and Revelations",
        },
      ],
      imageUrl: undefined,
      favorites: 23384,
      follows: 20572,
      reviews: 15236,
      genre: ["Adventure", "Romance"],
      characters: [["Naruto U."], ["Hinata H."]],
      language: "English",
      published: new Date("2006-01-02T03:22:03Z"),
      updated: new Date("2015-04-24T03:19:03Z"),
      rating: "T",
      words: 276868,
      universes: ["Naruto"],
      status: "Incomplete",
    });
  });

  it("should parse story with single chapter/missing data", async function () {
    const fragment = await loadTestCase("04-calculation.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toStrictEqual({
      id: 7619993,
      title: "Calculation",
      author: {
        id: 1424477,
        name: "fringeperson",
      },
      description:
        "Young Harry liked numbers, he liked using numbers and working out the value of things. When he found out that he was a wizard and had a big pile of gold... well, he had something new to calculate. oneshot, complete, don't own.",
      chapters: [
        {
          id: 1,
          title: "Calculation",
        },
      ],
      imageUrl: "/image/5498606/180/",
      favorites: 15363,
      follows: 4178,
      reviews: 1387,
      genre: [],
      characters: [["Harry P."]],
      language: "English",
      published: new Date("2011-12-09T01:31:07Z"),
      updated: undefined,
      rating: "K",
      words: 18141,
      universes: ["Harry Potter"],
      status: "Complete",
    });
  });

  it("should parse alerts list", async function () {
    const fragment = await loadTestCase("05-alerts.html");
    const parsed = await parseStory(fragment);

    expect(parsed).toBeUndefined();
  });
});
