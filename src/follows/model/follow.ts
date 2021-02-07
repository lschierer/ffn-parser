import UserRef from "./userRef";

export default interface Follow {
  id: number;
  title: string;
  author: UserRef;
  category: string;
  updated: Date;
  added: Date;
}
