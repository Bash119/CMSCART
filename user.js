var mongoose = require('mongoose');

//User Schema
var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true},
    sorting: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number
    }


});
var User = module.exports = mongoose.model('User', UserSchema);


