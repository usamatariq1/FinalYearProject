function LabAssistant(Schema, mongoose) {


    var TheSchema = new Schema({
        lab_assistant_id: Number,
        email: String,
        name: {
            firstName: String,
            lastName: String
        },
        mobile_number: Number,
        address: String,
        age: Number,
        gender: String
    });

    try {
        if (mongoose.model('LabAssistant')) return mongoose.model('LabAssistant');
    } catch(e) {
        if (e.name === 'MissingSchemaError') {
                return mongoose.model('LabAssistant', TheSchema);
        }
        }

}
module.exports.LabAssistant = LabAssistant;
