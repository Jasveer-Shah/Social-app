const mongoose = require('mongoose')
const bp = require('body-parser')
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const app = require('express')()
const PORT = process.env.PORT || 8080

app.use(require('cors')());
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())


mongoose.connect(
    "mongodb+srv://Jasveer:social%20123@cluster0.mvhrw.mongodb.net/social-app?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology:true},
    () =>{
        console.log('connected to mongo DB')
    }
)

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})

// useCreateIndex:true

















