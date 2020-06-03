function Patient(Schema, mongoose) {


    var TheSchema = new Schema({
        patient_id: Number,
        email: String,
        name: {
            firstName: String,
            lastName: String
        },
        mobile_number: Number,
        email: String,
        address: String,
        age: Number,
        gender: String
    });

    try {
        if (mongoose.model('Patient')) return mongoose.model('Patient');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('Patient', TheSchema);
        }
        }
}

module.exports.Patient = Patient;
