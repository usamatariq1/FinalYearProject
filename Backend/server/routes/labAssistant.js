var express = require('express');
var router = express.Router();

var appointment_controller = require('../controller/TestAppointment');
var log_controller = require('../controller/PatientLog');
var labAssistant_controller = require('../controller/LabAssistant');


router.get('/appointment/viewAppointmentList', appointment_controller.test_appointment_list);
router.get('/appointment/viewAppointment', appointment_controller.test_appointment_detail);
router.post('/appointment/confirm', log_controller.patientLog_add);

router.post('/viewLog',log_controller.log_detail);

router.post('/login',labAssistant_controller.labAssistantLogin);
router.post('/forgotPassword',labAssistant_controller.lab_assistant_forgotPassword);
router.post('/changePassword',labAssistant_controller.lab_assistant_changePassword);

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});
router.get('/signin', function(req, res, next) {
    res.render('signin', { title: 'Express' });
});
router.get('/view-testAppointment', function(req, res, next) {
    res.render('view-testAppointment', { title: 'Express' });
});

module.exports = router;
