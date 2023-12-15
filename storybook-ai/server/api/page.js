import { ImagePrompt, MusicPrompt } from "./GPT.js";
import { ImageGeneration } from "./DALLE.js";
import { MusicAI } from "./riffusion.js";
import path from "path";
import fs from "fs";

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const generatePrompt = async (story) => {
    var imagePrompt = await ImagePrompt(story);
    while (imagePrompt == 429 || imagePrompt === undefined) {
        console.log("Image prompt: limit reached");
        await sleep(60 * 1000);
        imagePrompt = await ImagePrompt(story);
    }
    var musicPrompt = await MusicPrompt(story);
    while (musicPrompt == 429 || musicPrompt === undefined) {
        console.log("Music prompt: limit reached");
        await sleep(60 * 1000);
        musicPrompt = await MusicPrompt(story);
    }
    return [imagePrompt, musicPrompt];
}


export const pageGeneration = async (pagedir) => {
    var story = fs.readFileSync(path.resolve(pagedir, "text.txt"));
    story = story.toString();

    var imagePath = path.resolve(pagedir, "image.png");
    var musicPath = path.resolve(pagedir, "music.wav");

    var [imagePrompt, musicPrompt] = await generatePrompt(story);
    console.log("image prompt: " + imagePrompt.message.content);
    console.log("music prompt: " + musicPrompt.message.content);

    var imageUrl = await ImageGeneration(imagePrompt.message.content, imagePath);

    var musicUrl = await MusicAI(musicPrompt.message.content, musicPath);

    // var imagePrompt = await ImagePrompt(story);
    // if (imagePrompt != 429) {
    //     console.log("image prompt: " + imagePrompt.message.content);

    //     var imageUrl = await ImageGeneration(imagePrompt.message.content, imagePath);
    //     console.log("image url: " + imageUrl);
    // }

    // var musicPrompt = await MusicPrompt(story);
    // while (musicPrompt == 429) {
    //     console.log("Too many requests. Please wait a few minutes and try again.");
    //     await sleep(60 * 1000);
    //     musicPrompt = await MusicPrompt(story);
    // }
    // if (musicPrompt != 429) {
    //     console.log("music prompt: " + musicPrompt.message.content);

    //     var musicUrl = await MusicAI(musicPrompt.message.content, musicPath);
    //     console.log(musicUrl);
    // }
}
