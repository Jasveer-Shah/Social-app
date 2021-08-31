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
    "mongodb+srv://Jasveer:Tanner23@cluster0.ilenn.mongodb.net/social-app2?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true},
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

















