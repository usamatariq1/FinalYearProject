function PatientLog(Schema, mongoose) {

    var TheSchema = new Schema({
        email:String,
        tests_appointed: String,
        date: String
    });
    try {
        if (mongoose.model('PatientLog')) return mongoose.model('PatientLog');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('PatientLog', TheSchema);
        }
        }
}


function TestAppointment(Schema, mongoose) {

    var TheSchema = new Schema({
        email: String,
        date: String,
        time: String,
        test_name:String,
    });

    try {
        if (mongoose.model('TestAppointment')) return mongoose.model('TestAppointment');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('TestAppointment', TheSchema);
        }
        }
}

function Test(Schema, mongoose) {

    var TheSchema = new Schema({
        test_name: String,
        test_description: String,
        bill:String,
        test_time:Date,
        test_frequency:Number
    });
    try {
        if (mongoose.model('Test')) return mongoose.model('Test');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('Test', TheSchema);
        }
        }
}


module.exports.PatientLog = PatientLog;
module.exports.TestAppointment = TestAppointment;
module.exports.Test = Test;