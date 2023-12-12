import OpenAI from "openai";
import fs from "fs";
import https from "https";

export const ImageGeneration = async (prompt, dest) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024",
        });
        console.log(response.data[0].url);
        const file = fs.createWriteStream(dest);
        https.get(response.data[0].url, function(response) {
            response.pipe(file);
            file.on("finish", function() {
                file.close();
            });
        }).on("error", function(err) {
            fs.unlink(dest);
        });
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
