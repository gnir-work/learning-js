import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = 5000
const PUBLIC_DIRECTORY = 'public';
const MEDIA_DIRECTORY = 'media'
const app = express()

function getGalleryImagesPaths() {
  return fs.readdirSync(path.join(__dirname, PUBLIC_DIRECTORY, MEDIA_DIRECTORY));
}

app.use(express.static(PUBLIC_DIRECTORY))

app.get('/gallery/images', (req, res) => res.send(getGalleryImagesPaths()));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
