import Replicate from "replicate";
import fs from "fs";
import https from "https";

export const MusicAI = async (prompt, dest) => {
    try {
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });
        const output = await replicate.run(
            "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
            {
                input: {
                    prompt_a: `${prompt}`,
                    denosing: 1,
                    num_inference_steps: 100,
                    seed_image_id: "motorway"
                }
            }
        );
        const file = fs.createWriteStream(dest);
        https.get(output.audio, function(response) {
            response.pipe(file);
            file.on("finish", function() {
                file.close();
            });
        }).on("error", function(err) {
            fs.unlink(dest);
        });
        console.log("Music generated");
        return dest;
    } catch (error) {
        console.log(error.message);
        return undefined;
    }
}
