var Model = require('../model/model');

var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/endoscopy';

var tests = Model.Test(Schema, mongoose);

db.on('error', function () {
    console.log('there was an error communicating with the database');
});
mongoose.connect(dbUrl,{ useFindAndModify: false }, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
});

exports.test_list = function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    tests.find({}).exec(function(err, results) {
        if (err) {
            res.send(err);
        }
// Respond with valid data
        res.send(results);
    });
};

exports.test_add = function(req, res)  {
    var test = new tests();

    tests.findOne({test_name: req.body.test_name},function(err,docs){
        if(err)
        {
            res.status(500).send('Error Occurred')}
        else {
            if(docs){
                res.status(500).send(doc+'Test Already Exists')
            }
            else{
                test.test_name= req.body.test_name,
                test.test_description= req.body.test_description,
                test.bill=req.body.bill,
                test_time=req.body.test_time,
                test_frequency=req.body.test_frequency

                test.save(function(err,user){
                    if(err){
                        res.status(500).send('Error in DB1')
                    }
                    else{
                        res.send("Test Added successfully")
                    }
                })
            }
        }
    })
} 

exports.test_delete = function(req, res) {
    test_name= req.body.test_name

    tests.deleteOne({test_name:test_name}).exec(function(err,data) {
        if (err) {
            return next(err);
        }
        else{
            res.send("Deleted successfully:--- ");
        }
    })
};

exports.test_edit = function(req, res) {

    tests.findOneAndUpdateOne({
        test_name: req.body.test_name
    },{
        test_name: req.body.test_name,
        test_description: req.body.test_description,
        bill: req.body.bill,
        test_time:req.body.test_time,
        test_frequency:req.body.test_frequency

    },{new:true},function(error, results) {
        if (error) {
            console.log(req.body.test_name +" Does not exist\n");
            return next(error);
        }else {
            res.send("Test Edited Sucessfully");
        }
        ;
    });
}

exports.test_detail = function(req, res) {
    console.log("Detail function called")
    tests.find({
        test_name: req.body.test_name
    }).populate('Test').exec(function (error, results) {
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