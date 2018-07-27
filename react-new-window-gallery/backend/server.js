import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = 5000
const PUBLIC_DIRECTORY = 'public';
const MEDIA_DIRECTORY = 'media'
const app = express()

function getGalleryImagesPaths() {
  const imagesNames =  fs.readdirSync(path.join(__dirname, PUBLIC_DIRECTORY, MEDIA_DIRECTORY));
  return imagesNames.map(imageName => path.join(MEDIA_DIRECTORY, imageName));
}

app.use(express.static(PUBLIC_DIRECTORY))

app.get('/gallery/images', (req, res) => res.send(getGalleryImagesPaths()));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
