const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique: true,
            required:true,
            min:7,
            max:20,
            unique: true,
        },
        password: {
            type:String,
            required:true,
            min:6
        },
        profilePicture: {
            type: String,
            default:"https://scontent.fatl1-2.fna.fbcdn.net/v/t1.6435-9/238970275_4442611395806085_5403557873637182713_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=Oe7ocy9y9bEAX_d1PzV&_nc_ht=scontent.fatl1-2.fna&oh=b365b98c58c008c4fb5127d9f85b09d4&oe=61456761"
        },
},
 {timestamps: true}
)

module.exports = mongoose.model("User", UserSchema)