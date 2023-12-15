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
    while (imagePrompt === undefined) {
        console.log("Image prompt: limit reached");
        await sleep(60 * 1000);
        imagePrompt = await ImagePrompt(story);
    }
    console.log("image prompt: " + imagePrompt.message.content);
    var musicPrompt = await MusicPrompt(story);
    while (musicPrompt === undefined) {
        console.log("Music prompt: limit reached");
        await sleep(60 * 1000);
        musicPrompt = await MusicPrompt(story);
    }
    console.log("music prompt: " + musicPrompt.message.content);
    return [imagePrompt, musicPrompt];
}

const generateImage = async (imagePrompt, imagePath) => {
    var result = await ImageGeneration(imagePrompt.message.content, imagePath);
    while (result === undefined) {
        console.log("Image generation: limit reached");
        await sleep(60 * 1000);
        result = await ImageGeneration(imagePrompt.message.content, imagePath);
    }
}

const generateMusic = async (musicPrompt, musicPath) => {
    var result = await MusicAI(musicPrompt.message.content, musicPath);
    while (result === undefined) {
        console.log("Music generation: limit reached");
        await sleep(60 * 1000);
        result = await MusicAI(musicPrompt.message.content, musicPath);
    }
}

export const pageGeneration = async (pagedir) => {
    var story = fs.readFileSync(path.resolve(pagedir, "text.txt"));
    story = story.toString();

    var imagePath = path.resolve(pagedir, "image.png");
    var musicPath = path.resolve(pagedir, "music.wav");

    var [imagePrompt, musicPrompt] = await generatePrompt(story);

    await generateImage(imagePrompt, imagePath);
    await generateMusic(musicPrompt, musicPath);
}
