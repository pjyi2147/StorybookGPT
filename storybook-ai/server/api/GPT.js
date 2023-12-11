import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
});

export const ImagePrompt = async (story) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are provided with a story text. Your goal is to create a prompt for Dall E to generate an image. It must be visually descriptive and must include scene description, and character descriptions in 50 words."
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
      console.log(error.response.status);
      console.log(error.response.data);
    }
    else {
      console.log(error.message);
    }
  }
}

export const MusicPrompt = async (story) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You will be provided with a story text. Your goal is to create a prompt for musicLM to generate a piece of music for background music. It must be descriptive and must include the following: scene description, music genre, and tempo."
        },
        {
          "role": "user",
          "content": `${story}`
        }
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    });
    console.log(response.choices[0].text)
    return response.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
    else {
      console.log(error.message);
    }
  }
}
