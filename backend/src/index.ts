import express from 'express'
import { PORT } from './utils/config'
import "reflect-metadata"



const app = express()
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })








