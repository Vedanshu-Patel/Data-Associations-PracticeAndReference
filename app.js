//By Embedded Data
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DataAssociations");

var postSchema = new mongoose.Schema({
    Title:String,
    Description:String
});

var Post = mongoose.model('Post',postSchema);

var personSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    posts:[postSchema]
});

var Person = mongoose.model('Person',personSchema);


var x =new Person({
    name: "Rocky",
    username: "Rocky_Handsome",
    email: "Rocky_Handsome123.ac.in"
});

x.save(function(err,y){
    if(err){
        console.log(err);
    }
    else{
        console.log(y);
    }
});

x.posts.push({
    Title:"Hello",
    Description:"This is the introduction."
});

x.save(function(err,z){
    if(err){
        console.log(err);
    }
    else{
        console.log(z);
    }
});

Person.findOne({username: "Rocky_Handsome"},function(err,w){
    if(err){
        console.log(err);
    }
    else{
        w.posts.push({
            Title:" New Hello",
            Description:"That was a bad introduction."
        });
        w.save(function(err,h){
            if(err){
                console.log(err);
            }
            else{
                console.log(h);
            }
        });
    }
});