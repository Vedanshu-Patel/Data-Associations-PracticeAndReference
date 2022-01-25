var mongoose = require('mongoose');
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
module.exports = Person;