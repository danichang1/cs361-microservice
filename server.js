const {AssemblyAI} = require("assemblyai");
const express = require("express");
const fs = require('fs');
const ytdl = require('ytdl-core');
const apiKey = process.env.ASSEMBLYAI_API_KEY;
const app = express();
app.use(express.json());

const client = new AssemblyAI({apiKey: apiKey});

app.post("/speechToText", async(req, res) => {
    try {
        const videoLink = req.body.link;
        await downloadAudio(videoLink);
        const transcript = await client.transcripts.transcribe({
            audio: "./audioFile.mp3",
        });
        res.status(200).send(transcript.text);
    } catch(error) {
        res.status(400).send(error);
    }
});

async function downloadAudio(videoLink){
    return new Promise((resolve, reject) => {
        const audioStream = ytdl(videoLink, {filter: 'audioonly'});
        audioStream.pipe(fs.createWriteStream("audioFile.mp3"));
        audioStream.on('end', () => {
            resolve();
        });
        audioStream.on('error', (err) => {
            reject(err);
        });
    });
};

app.listen(5555, () => {
    console.log("Server is listening on port 5555");
});