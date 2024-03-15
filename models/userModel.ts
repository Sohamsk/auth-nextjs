import mongoose from "mongoose";
const { Schema, model } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    }
});

export default model('User', userSchema)