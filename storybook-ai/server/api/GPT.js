import OpenAI from "openai";

const IMAGE_PROMPT = "You will be provided with a passage from a story. Your goal is to create a prompt for a text-to-image model to generate an image based on the passage. It must describe the setting in very vivid detail. The prompt cannot exceed 50 words, and must be in the form of a sentence"
const MUSIC_PROMPT = "You wll be provided with a passage from a story. Your goal is to create a prompt for a text-to-audio model to generate music based on the passage. The prompt must be consisted of descriptive adjectives and musical terminologies separated by commas less than 10 words."

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
    console.log("why only message?");
    console.log(error.message);
    return undefined;
  }
}

export const ImagePrompt = async (story) => {
  console.log("image prompt generation");
  return Prompt(story, IMAGE_PROMPT)
}

export const MusicPrompt = async (story) => {
  console.log("music prompt generation");
  return Prompt(story, MUSIC_PROMPT)
}
