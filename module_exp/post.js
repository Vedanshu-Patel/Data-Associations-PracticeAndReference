var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    Title:String,
    Description:String
});

var Post = mongoose.model('Post',postSchema);
module.exports = Post;