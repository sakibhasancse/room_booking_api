

import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()

// if (process.env.NODE_ENV !== 'production') {
//     import dotenv from 'dotenv'
//     dotenv.config({ path: './config/config.env' })
// }


const PORT = process.env.PORT || 8080
const mongourl = process.env.MONGODBURL || 'mongodb+srv://spinnerDemoDatabase:1234@cluster0.norhy.mongodb.net/crudapp?retryWrites=true&w=majority'

app.use(bodyparser.json({ limit: "30mb", extended: true }))
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



import postRouter from './router/posts.js'

app.use(postRouter)

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`server is runniung on ${PORT}`)
    }))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false)












