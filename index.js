import express from 'express'
import path from 'path'
// create an express app
const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
app.use(router, express.static('./static'))
// router
router.get('/', display, (req,res)=>{
    // res.status(200).json({mgs:"You're Home!"})
    // res.json({mgs:"You're Home!"}
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})


// middleware

function display(req, res, next) {
    console.log('hello there ')
     next()
}



router.get('/about', (req, res)=>{
    res.json({status:res.statusCode, mgs:"About Page"})
})


app.listen(port)

