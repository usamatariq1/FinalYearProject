var mongoose = require('mongoose');

module.exports.Admin = function Admin() {

    var TheSchema = new mongoose.Schema({
        username: String,
        password: String,
        role:String
    });

    try {
        if (mongoose.model('Admin')) return mongoose.model('Admin');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('Admin', TheSchema);
        }
    }

}
