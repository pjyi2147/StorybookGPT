import { ImagePrompt, MusicPrompt } from "./GPT.js";
import { ImageGeneration } from "./DALLE.js";
import { MusicAI } from "./riffusion.js";

export const test = async (story) => {

    var imagePrompt = await ImagePrompt(story);
    console.log("image prompt: " + imagePrompt.message.content);

    var musicPrompt = await MusicPrompt(story);
    console.log("music prompt: " + musicPrompt.message.content);

    var musicUrl = await MusicAI(musicPrompt.message.content);
    console.log(musicUrl);

    return {
        "image": imagePrompt.message.content,
        "music": musicPrompt.message.content,
        "musicUrl": musicUrl
    }

    // var imageUrl = await ImageGeneration(imagePrompt.message.content);
    // console.log("image url: " + imageUrl);
    // return imageUrl;

    //return imagePrompt.message.content;

    //var musicPrompt = MusicPrompt(story);
    //console.log(musicPrompt);

    //var imageUrl = ImageGeneration(imagePrompt);
    // console.log(imageUrl);
    //var musicUrl = MusicGeneration(musicPrompt);
}
