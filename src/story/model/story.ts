import Chapter from "./chapter";
import User from "./user";

type Character = string;
type Pairing = Character[];

export default interface Story {
  id: number;
  title: string;
  author: User;
  description: string;
  chapters: Chapter[];
  imageUrl?: string;
  favorites: number;
  follows: number;
  reviews: number;
  genre: string[];
  characters: Pairing[];
  language: string;
  published: Date;
  updated?: Date;
  rating: "K" | "K+" | "T" | "M" | "MA";
  words: number;
  universes: string[];
  status: "Complete" | "Incomplete";
}
