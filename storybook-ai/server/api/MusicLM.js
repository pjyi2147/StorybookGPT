import { spawn } from 'child_process';

export const MusicGeneration = async (prompt, save_location) => {
    pythonProcess = spawn('python3', ['api.py', `${prompt}`, `${save_location}`])
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python script output: ${data}`);
    });
}
