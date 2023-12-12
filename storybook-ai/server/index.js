import express from 'express';
import fs from 'fs';
import { test } from './api/test.js';
import dotnev from 'dotenv';

dotnev.config({
  path: "./.env.local"
});
const app = express();
const galleryInfoPath = '../gallery/info.json';
const PORT = process.env.PORT || 3001;

const story = "In the heart of Japan, where cultures intersected like vibrant threads in a tapestry, two souls found themselves intertwined in a serendipitous encounter. Eunji, a spirited Korean girl with eyes that reflected the depth of her adventurous spirit, embarked on an exchange program in Japan. Meanwhile, there was Jackson, an American boy whose curiosity about the world led him to the same bustling streets of Tokyo. Their paths crossed at a quaint izakaya, where the aroma of sizzling tempura and the melody of laughter filled the air. Eunji, captivated by the lively ambiance, found herself drawn to a table where Jackson sat, engrossed in Japanese calligraphy. Their conversation flowed effortlessly, weaving between cultural anecdotes and shared experiences of navigating a foreign land. Eunji marveled at Jackson's fascination with learning new languages, while Jackson admired Eunji's passion for traditional Korean dance. As days turned into weeks, their bond deepened, blossoming like the cherry blossoms in spring. They explored hidden temples, got lost in the neon-lit alleys of Shinjuku, and indulged in the tranquility of Kyoto's bamboo forests.Amidst the bustling chaos of Tokyo and the tranquil beauty of Japan's countryside, their connection grew stronger. They found comfort in each other's presence, a sense of belonging that transcended borders and languages. However, the looming end of their exchange program cast a bittersweet shadow over their hearts. With each passing day, the impending separation weighed heavier on their minds. On their final evening together, beneath a canopy of stars in a serene Kyoto garden, they shared whispered promises and heartfelt confessions. Eunji vowed to visit America, while Jackson promised to explore Korea, knowing that their worlds would forever be intertwined. As they stood beneath the softly swaying branches, they sealed their bond with a tender kiss, knowing that distance was just a temporary obstacle in their extraordinary love story—one that traversed continents and cultures, bound by an unbreakable thread of shared moments and unwavering devotion.";

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/api/gallery', (req, res) => {
  const a = JSON.parse(fs.readFileSync(galleryInfoPath))
  res.json(a);
});

app.get('/api/env', (req, res) => {
  res.json(process.env);
})

app.get('/api/image', async (req, res) => {
  var response = await test(story);
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
