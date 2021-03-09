import mongoose from "mongoose"


mongoose.connect('mongodb://localhost:27017/userDB1', {useNewUrlParser: true, useUnifiedTopology: true});


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    

});

const User = new mongoose.model ("User", userSchema);
