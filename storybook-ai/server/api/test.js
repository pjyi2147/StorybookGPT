import { ImagePrompt, MusicPrompt } from "./GPT.js";
import { ImageGeneration } from "./DALLE.js";

export const test = async (story) => {

    var imagePrompt = await ImagePrompt(story);
    console.log("image prompt: " + imagePrompt.message.content);

    var imageUrl = await ImageGeneration(imagePrompt.message.content);
    console.log("image url: " + imageUrl);
    return imageUrl;

    //return imagePrompt.message.content;

    //var musicPrompt = MusicPrompt(story);
    //console.log(musicPrompt);

    //var imageUrl = ImageGeneration(imagePrompt);
    // console.log(imageUrl);
    //var musicUrl = MusicGeneration(musicPrompt);
}
