import express from 'express'

// create an express app
const app = express()
const port = +process.env.PORT || 4000
// router
app.get('/', (req,res)=>{
    // res.status(200).json({mgs:"You're Home!"})
    // res.json({mgs:"You're Home!"})
    res.json({status:res.statusCode, mgs:"You're Home!"})
})
app.get('/about', (req, res)=>{
    res.json({status:res.statusCode, mgs:"About Page"})
})
app.all('*', (req, res)=>{
    res.json({status:404, mgs:"404 PAGE"})
})

app.listen(port)