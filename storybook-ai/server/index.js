const express = require('express');
const app = express();
const fs = require('fs')
const galleryInfoPath = '../gallery/info.json';
const PORT = process.env.PORT || 3001;

app.get('/api/gallery', (req, res) => {
  const a = JSON.parse(fs.readFileSync(galleryInfoPath))
  res.json(a);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});