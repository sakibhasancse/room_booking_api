import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile:String,
    likeCount: {
        type: Number,
        default: 0
    },

},{timestamp:true}) 

const posts  = mongoose.model('POST', postSchema)
export default posts 