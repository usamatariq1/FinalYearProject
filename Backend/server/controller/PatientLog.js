var Model  = require('../model/model');
var appointment_controller = require('../controller/TestAppointment');

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl, { useFindAndModify: false },function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});

var pat_log = Model.PatientLog(Schema, mongoose);

exports.patientLog_add = function(req, res) {
    console.log("Add log")
    let logInfo=appointment_controller.test_appointment_getSpecific({email:req.body.email,test_name:req.body.test_name})
    console.log(req.body)

    var log = new pat_log();

    log.email=req.body.email;
    log.test_name = req.body.test_name;
    log.date = logInfo.date;

    log.save(function(err,user){
        if(err){
            res.status(500).send('Error')
        }
        else{
            res.send("Added successfully in Patient log")
        }
    })
    console.log("Added successfully in Patient log")
    appointment_controller.test_appointment_delete({email:req.body.email,test_name:req.body.test_name});
    console.log("Deleted successfully from appointments")
}

exports.log_detail = function(req, res) {

    pat_log.find({
        email:req.body.email
    }).populate('Patient Log').exec(function (error, results) {
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
        
