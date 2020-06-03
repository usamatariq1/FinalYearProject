var Model = require('../model/model');

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

var test_app = Model.TestAppointment(Schema, mongoose);

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl,{ useFindAndModify: false }, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});

exports.test_appointment_list = function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    test_app.find({}).exec(function(err, results) {
        if (err) {
            res.send(err);
        }
// Respond with valid data
        res.send(results);
    });
};

exports.test_appointment_add = function(req, res)  {
    let date= (req.body.time).split("T")
    let time=date[1].split(":")
    let hours=time[0]-7;
    date=date[0]+" "+hours+":"+time[1];

    var test = new test_app();
    test_app.findOne({email:req.body.email,test_name:req.body.test_name},function(err,docs){
        if(err)
        {
            res.status(500).send('Error Occurred')
        }
        else {
            if(docs){
                alert("Test appointment already exists for selected test")
            }
            else{
                test.email= req.body.email,
                test.date=date,
                test.test_name= req.body.test_name,

                test.save(function(err,user){
                    if(err){
                        console.log(err)
                        res.status(err)
                    }
                    else{
                        console.log(user)
                        res.send(user)
                    }
                })
            }
        }
    })
} 

exports.test_appointment_delete = function(req, res) {
    console.log("Delete function called")
    console.log(req.body)
    test_app.deleteOne({email:req.body.email,test_name:req.body.test_name}).exec(function(err,data) {
        if (err) {
            console.log("Error while deleting")
            res.send(err);
        }
        else if(data){
            console.log("Appointment deleted")
            console.log(data)
            res.send(data);
        }
    })
};

exports.test_appointment_edit = function(req, res) {

    let date= (req.body.time).split("T")
    let time=date[1].split(":")
    let hours=time[0]-7;
    date=date[0]+" "+hours+":"+time[1];

    test_app.findOneAndUpdate({
        email:req.body.email,
        test_name:req.body.test_name
    },{
        email: req.body.email,
        date: date,
        test_name: req.body.test_name,

    },{new:true},function(error, results) {
        if (error) {
            console.log(req.body.email +" does not have any appointment\n");
            return next(error);
        }else {
            res.send(results);
        }
        ;
    });
}

exports.test_appointment_detail = function(req, res) {
    console.log(req.body)
    test_app.find({
        email:req.body.email
    }).populate('Test Appointment').exec(function (error, results) {
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
                console.log(results)
            }
        });
    }

    exports.test_appointment_getSpecific = function(req, res) {
        test_app.find({
            email:req.body.email,test_name:req.body.test_name
        }).populate('Test Appointment').exec(function (error, results) {
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
                    console.log(results)
                }
            });
        }
