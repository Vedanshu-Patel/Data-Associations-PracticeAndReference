
//By object references
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DataAssociations2");

var postSchema = new mongoose.Schema({
    Title:String,
    Description:String
});

var Post = mongoose.model('Post',postSchema);

var personSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var Person = mongoose.model('Person',personSchema);

Person.create({
    name: "Rocky",
    username: "Rocky_Handsome",
    email: "Rocky_Handsome123.ac.in"
});


Post.create({
    Title:"Learning",
    Description:"It's a never ending process."
},function(err,x){
    if(err){
        console.log(err);
    }
    else{
        console.log(x);
    }
});

Post.create({
    Title:"Writing",
    Description:"It's done with hands."
},function(err,y){
    Person.findOne({username:"Rocky_Handsome"},function(err,z){
        if(err){
            console.log(err);
        }
        else{
            z.posts.push(y);
            z.save(function(err,h){
                if(err) {
                    console.log(err);
                }
                else{
                    console.log(h);
                }
            })
        }
    });
});