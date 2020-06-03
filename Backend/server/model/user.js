var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

module.exports.User = function User() {
    var TheSchema = new mongoose.Schema({
        username:{
            type:String,
        },
        password:{
            type:String,
        },
        role:{
            type:String,
        },        
    })
    try {
        if (mongoose.model('User')) return mongoose.model('User');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('User', TheSchema);
        }
        }
}