import POST from '../model/posts.js'

export const getposts = async (req, res, next) => {
    try {
        
      
    const posts = await POST.find()

    res.status(200).json({
        success: true,
        posts
    })

    } catch (error) {
        res.status(404).json({
            success: false,
            error:error.message
        })
    } 
}

export const rateposts = (req, res, next) => {

    res.send('hello')
}