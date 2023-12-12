import Replicate from "replicate";
import fs from "fs";
import https from "https";

export const MusicAI = async (prompt, dest) => {
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });
    const output = await replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            prompt_a: `${prompt}`,
            denosing: 0.7,
            prompt_b: "background music, no singing",
            alpha: 0.5,
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
    return output.audio;
}
