


const moon = require('mongoose');
const Schema = moon.Schema;

const feedSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    message:{
        type: String, 
        required: true
    }
}, {timestamps: true})

const Feed = moon.model('Feed',feedSchema )

module.exports = {
    Feed
};