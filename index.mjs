
import  express  from 'express'
import { getJson } from './openia.mjs'
import { analyzeImage } from './vision-gcp.mjs'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/uploadImage', async (req, res) => {
    const fileName = 'receta-medica-2.jpg';
    const image = await fs.promises.readFile(fileName, 'base64');
    //const image = ''
    const texto = await analyzeImage(image);
    const json = await getJson(texto);
    res.send(json);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
