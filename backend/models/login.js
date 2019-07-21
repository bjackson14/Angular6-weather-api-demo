import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Login = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('Login', Login);