var LabAssistant = require('../model/labAssistant');
var User = require('../model/user');

var nodemailer = require('nodemailer');

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

var LabAssist = LabAssistant.LabAssistant(Schema, mongoose);
var user = User.User();

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl, { useFindAndModify: false },function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});


exports.lab_assistant_add = function(req, res) {

    var labAssis = new LabAssist();
    var use = new user();
    LabAssist.findOne({email:req.body.email},function(err,docs){
        if(err)
        {
            res.status(500).send('Error Occurred')}
        else {
            if (docs) {
                res.status(500).send(docs + 'User Already Exists')
            } else {

                labAssis.lab_assistant_id = req.body.lab_assistant_id;
                labAssis.email = req.body.email;
                labAssis.mobile_number = req.body.mobile_number;
                labAssis.address = req.body.address;
                labAssis.age = req.body.age;
                labAssis.gender = req.body.gender;
                labAssis.name.firstName = req.body.firstName;
                labAssis.name.lastName = req.body.lastName;

                labAssis.save(function (err, user) {
                    if (err) {
                        res.status(500).send('Error in DB1')
                    }
                    else{
                        use.username = req.body.email;
                        use.password = req.body.password;
                        use.role="Lab Assistant"
                        use.save(function (err, user) {
                            if (err) {
                                // delete the above records from doc and person tables
                                res.status(500).send(err)
                            } else {
                                res.send("Lab Assistant Added successfully")
                            }
                        })
                    }
                })
            }

        };
    });
};

exports.lab_assistant_edit = function(req, res) {
    console.log(req.body)
    LabAssist.findOneAndUpdate({
        email:req.body.email
    },{
        lab_assistant_id : req.body.lab_assistant_id,
        email : req.body.email,
        mobile_number: req.body.mobile_number,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
        name: {
            firstName: req.body.name.firstName,
            lastName: req.body.name.lastName,
        }
    },{new: true},function(error,results) {
        if (error) {
            return next(error);
        } else {
            res.send("Lab assistant Updated Sucessfully");
            };
        });
    }




exports.lab_assistant_detail = function(req, res) {

    LabAssist.findOne({
        email:req.body.email
    }).populate('LabAssistant').exec(function (error, results) {
        if (error) {
            return next(error);
        }
// If valid user was not found, send 404
        if (!results) {
            res.send(404);
        }
        else{
                res.json(results);
            }
        });
};

exports.lab_assistant_list = function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    LabAssist.find({}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
// Respond with valid data
        res.json(results);
    });
};


exports.lab_assistant_delete = function(req, res) {
    console.log(req.body)
    email=req.body.email;
    LabAssist.deleteOne({email:email},function(error, data) {
        if (error) {
            res.send(error);
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
    });
}

    exports.lab_assistant_changePassword = function(req, res) {
        console.log(req.body)
        user.findOneAndUpdate({
        username: req.body.username
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

    exports.labAssistant_getPassword= function(req,res){
        user.findOne({
            username: req.body.email
        }, function (error, results) {
            if (results) {
                console.log(results.password)
                return next(JSON.stringify(results.password));
            }
            else{
                return next(error);
            }
            
        });
    }

    exports.labAssistantLogin = function(req,res){
        user.findOne({
            username: req.body.email,
            password: req.body.password
        }, function (results, error) {
            if(error){
                console.log("Wrong credentials")
                return res.send(error)
            }
            if (results) {
                    return res.send(results)
            }
        })
    }
    
    exports.lab_assistant_forgotPassword = function(req, res) {
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
            subject: 'Easy med portal password of '+req.body.email,
            text: 'Your password is: '
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }

// // Display list of all labAssistants.
// exports.labAssistant_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant list');
// };
//
// // Display detail page for a specific labAssistant.
// exports.labAssistant_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant detail: ' + req.params.id);
// };
//
// // Display labAssistant create form on GET.
// exports.labAssistant_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant create GET');
// };
//
// // Handle labAssistant create on POST.
// exports.labAssistant_create_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant create POST');
// };
//
// // Display labAssistant delete form on GET.
// exports.labAssistant_delete_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant delete GET');
// };
//
// // Handle labAssistant delete on POST.
// exports.labAssistant_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant delete POST');
// };
//
// // Display labAssistant update form on GET.
// exports.labAssistant_update_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant update GET');
// };
//
// // Handle labAssistant update on POST.
// exports.labAssistant_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: labAssistant update POST');
// };
