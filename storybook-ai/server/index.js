import express from 'express';
import fs from 'fs';
import { pageGeneration } from './api/page.js';
import dotnev from 'dotenv';
import multer from 'multer';
import { splitStoryIntoPages } from './api/parseBook.js'

dotnev.config({
  path: "./.env.local"
});
const app = express();
const galleryInfoPath = '../gallery/info.json';
const PORT = process.env.PORT || 3001;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use('/books', express.static('../books'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.post('/api/upload', upload.single('textFile'), async (req, res) => {
  const uploadedFile = req.file;

  // Check if a file was uploaded
  if (!uploadedFile) {
    return res.status(400).send('No file uploaded.');
  }

  // Check if the uploaded file is a text file
  if (uploadedFile.mimetype !== 'text/plain') {
    return res.status(400).send('Uploaded file is not a text file.');
  }

  // Access the file content (as a buffer in memory)
  const fileContent = uploadedFile.buffer.toString('utf8');

  // Split the book into pages
  const UPLOAD_DIRECTORY = `../uploads`

  if (!fs.existsSync(UPLOAD_DIRECTORY)) {
    fs.mkdirSync(UPLOAD_DIRECTORY, {recursive: true})
  }

  fs.writeFileSync(`${UPLOAD_DIRECTORY}/${uploadedFile.originalname}`, fileContent);

  const bookId = fs.readdirSync(UPLOAD_DIRECTORY).length;
  var maxPage = splitStoryIntoPages(fileContent, bookId)

  console.log(bookId, maxPage);
  res.send({
    maxPage: maxPage,
    bookId: bookId,
  });

  for (let i = 1; i <= 2; i++) {
    const pageId = String(i);
    const pageDirectory = `../books/${bookId}/${pageId}/`;
    console.log("Generating page " + pageId);
    await pageGeneration(pageDirectory);
    console.log("Done generating page " + pageId);
  }
});


app.get('/api/:bookId/:page/text', (req, res) => {
  var bookId = Number(req.params.bookId);
  var pageNumber = Number(req.params.page);

  // convert bookid to number
  if (isNaN(bookId) || bookId < 0) {
    res.status(400).send('Invalid bookId.');
    return;
  }

  if (isNaN(pageNumber) || pageNumber < 0) {
    res.status(400).send('Invalid pageNumber.');
    return;
  }

  // get the file directory exists
  var filedir = `../books/${bookId}/${pageNumber}`;

  // check if directory exists
  if (!fs.existsSync(filedir)) {
    res.status(404).send('File directory not found.');
    return;
  }

  // get the file
  var filePath = `${filedir}/text.txt`;
  if (!fs.existsSync(filePath)) {
    res.status(404).send('File not found.');
    return;
  }

  // read the file
  var fileContent = fs.readFileSync(filePath, 'utf8');

  // send the file content
  res.send({
    "content": fileContent
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
