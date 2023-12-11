import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
});

export const ImageGeneration = async (prompt) => {
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024",
        });
        console.log(response.data);
        return response.data[0].url;
    }
    catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }
        else {
            console.log(error.message);
        }
    }
}
