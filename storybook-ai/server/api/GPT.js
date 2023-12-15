import OpenAI from "openai";
import { sleep } from "openai/core";

const IMAGE_PROMPT = "You will be provided with a passage from a story. Your goal is to create a prompt for a text-to-image model to generate an image based on the passage. It must describe the setting in very vivid detail. The prompt cannot exceed 50 words, and must be in the form of a sentence"
const MUSIC_PROMPT = "You wll be provided with a passage from a story. Your goal is to create a prompt for a text-to-audio model to generate music based on the passage. It must include the genre of music and the tempo, and describe the overall mood of the scene with detailed adjectives. The prompt cannot exceed 50 words, and must be in the form of a sentence."

const Prompt = async (story, prompt) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": `${prompt}`
        },
        {
          "role": "user",
          "content": `${story}`
        }
      ],
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
    });
    return response.choices[0];
  } catch (error) {
    if (error.response) {
      if (error.response.status == 429) {
        console.log("Too many requests. Please wait a few minutes and try again.");
        return 429;
      } else {
        console.log(error.response.status);
      }
    }
    else {
      console.log(error.message);
    }
  }
} 

export const ImagePrompt = async (story) => {
  return Prompt(story, IMAGE_PROMPT)
}

export const MusicPrompt = async (story) => {
  return Prompt(story, MUSIC_PROMPT)
}
