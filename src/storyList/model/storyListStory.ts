import { Story } from "../../story";

type StoryListStory = Omit<Story, "chapters">;

export default StoryListStory;
