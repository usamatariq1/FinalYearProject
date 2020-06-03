var Patient = require('../model/patient');
var User = require('../model/user');

var nodemailer = require('nodemailer');

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

var user = User.User();
var pat = Patient.Patient(Schema, mongoose);

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl,{ useFindAndModify: false }, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});

// Display list of all patients.
exports.patient_list = function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    pat.find({}).exec(function(error, results) {
        if (error) {
            res.send(error)
        }
// Respond with valid data
        res.send(results);
    });
};

exports.patient_edit = function(req, res) {
    pat.findOneAndUpdate({
        email:req.body.email
    },{
        patient_id : req.body.patient_id,
        email : req.body.email,
        mobile_number: req.body.mobile_number,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
        name: {
            firstName: req.body.name.firstName,
            lastName: req.body.name.lastName,
        }

    },{new: true},function(error, results) {
        if (error) {
            console.log(req.body.email +" Does not exist\n");
            return next(error);
        }else {
            res.send("Patient Updated Sucessfully");
        };
    });
}


exports.patient_add = function(req, res) {
    console.log("Add patient function called")

    // doc= new Doctor();
    var pats = new pat();
    var use = new user();
    pat.findOne({email:req.body.email},function(err,docs){
        if(err)
        {
            res.status(500).send('Error Occurred')}
        else {
            if(docs){
                res.status(500).send(docs+'User Already Exists')
            }
            else{

                pats.patient_id = req.body.patient_id;
                pats.email = req.body.email;
                pats.mobile_number = req.body.mobile;
                pats.address = req.body.address;
                pats.age = req.body.age;
                pats.gender = req.body.gender;
                pats.name.firstName = req.body.firstName;
                pats.name.lastName = req.body.lastName;

                pats.save(function(err,user){
                    if(err){
                        res.status(500).send('Error in DB1')
                    }
                    else{
                        use.username = req.body.email;
                        use.password = req.body.password;
                        use.role="Patient";
                        use.save(function(err,user){
                            if(err){
                                // delete the above records from doc and Personson tables
                                res.status(500).send(err)
                            }
                            else{
                                res.send("Patient Added successfully")
                            }
                                })
                            }
                        })
                    }
        };
    })
}

exports.patient_delete = function(req, res) {
    email=req.body.email;

    pat.deleteOne({email:email}).exec(function(err,data) {
        if (err) {
            return next(err);
        }
        else{

            user.deleteOne({username:email},function(err) {
                if (err) {
                    res.send(err);
                }
                else{
                    res.send("Deleted successfully:--- "+email);
                        }
                    });
                }
            })
        };


exports.patient_detail = function(req, res) {
    pat.findOne({
        email:req.body.email
    }).populate('Patient').exec(function (error, results) {
        if (error) {
            return next(error);
        }
// If valid user was not found, send 404
        if (!results) {
            res.send(404);
        }
        else{
// Respond with valid data
                res.json(results);
            }
        });
    }

    exports.patient_changePassword = function(req, res) {

        user.findOneAndUpdate({
            username: req.body.username
        }, {
            username: req.body.username,
            password: req.body.password,
            role:'Patient'
        }, function (error, results) {
            if (error) {
                return next(error);
            }
            console.log(results);
            // Respond with valid data
            res.send("Patient password changed Sucessfully");
        });
    }

    exports.patient_getPassword= function(req,res){
        user.findOne({
            username: req.body.email
        }, function (error, results) {
            if (results) {
                return next(JSON.stringify(results.password));
                console.log(JSON.stringify(results.password))
            }
            else{
                return next(error);
            }
            
        });
    }

    exports.patientLogin = function(req,res){
        user.findOne({
            username: req.body.email,
            password: req.body.password
        }, function (results, error) {
            if(error){
                console.log("Wrong credentials")
                return res.send(error)
            }
            if (results) {
                console.log(results)
                return res.send(results)
            }
        })
        return null
    }

    exports.patient_forgotPassword = function(req, res) {
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'faiqabdullah696@gmail.com',
            pass: 'dont_touchme'
        }
        });
        
        var mailOptions = {
        from: 'faiqabdullah696@gmail.com',
        to: req.body.email,
        subject: 'EasyMed portal password of '+req.body.email,
        text: 'Your password is: '
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error in sendin mail");
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            alert('Password has been sent to your email')
        }
        });
    }

// Display detail page for a specific patient.
// exports.patient_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient detail: ' + req.params.id);
// };
//
// // Display patient create form on GET.
// exports.patient_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient create GET');
// };
//
// // Handle patient create on POST.
// exports.patient_create_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient create POST');
// };
//
// // Display patient delete form on GET.
// exports.patient_delete_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient delete GET');
// };
//
// // Handle patient delete on POST.
// exports.patient_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient delete POST');
// };
//
// // Display patient update form on GET.
// exports.patient_update_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient update GET');
// };
//
// // Handle patient update on POST.
// exports.patient_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: patient update POST');
// };