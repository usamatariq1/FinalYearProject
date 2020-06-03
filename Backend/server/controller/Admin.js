var User = require('../model/user');

var mongoose = require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

var user = User.User();

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl, { useFindAndModify: false },function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});

exports.admin_changePassword = function(req, res) {
    user.findOneAndUpdate({
    username: req.body.username, role:"Admin"
    }, {
    username: req.body.username,
    password: req.body.password,
    role:'Lab Assistant'
    },{new: true}, function (error, results) {
    if (error) {
        return next(error);
    }
    console.log(results);
    // Respond with valid data
    res.send("Lab assistant password changed Sucessfully");
});
}

exports.admin_login = function(req, res) {
    passport.authenticate('local', { successRedirect: '/admin/ok',failureRedirect:'/admin/signin' });
    res.send(req.body.username +' received login successfully');
};

// Display list of all admins.
exports.admin_list = function(req, res) {

   Admin.Admin().find({},function (error,data) {
       if (error){ res.send("DATABASE ERROR");}
       else{
           res.send(data);
       }

   });
};

// Display detail page for a specific admin.
// exports.admin_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin detail: ' + req.params.id);
// };
//
// // Display admin create form on GET.
// exports.admin_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin create GET');
// };
//
// // Handle admin create on POST.
//
//
// // Display admin delete form on GET.
// exports.admin_delete_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin delete GET');
// };
//
// // Handle admin delete on POST.
// exports.admin_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin delete POST');
// };
//
// // Display admin update form on GET.
// exports.admin_update_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin update GET');
// };
//
// // Handle admin update on POST.
// exports.admin_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: admin update POST');
// };