var express = require('express');
var router = express.Router();

var patient_controller = require('../controller/Patient');
var appointment_controller = require('../controller/TestAppointment');
var log_controller = require('../controller/PatientLog');

router.post('/signup', patient_controller.patient_add);
router.post('/detail', patient_controller.patient_detail);
router.get('/list', patient_controller.patient_list);
router.post('/detail/edit', patient_controller.patient_edit);
router.post('/login',patient_controller.patientLogin);
router.post('/forgotPassword',patient_controller.patient_forgotPassword);
router.post('/changePassword',patient_controller.patient_changePassword);

router.post('/appointment/bookAppointment', appointment_controller.test_appointment_add);
router.get('/appointment/viewAppointmentList', appointment_controller.test_appointment_list);
router.post('/appointment/deleteAppointment', appointment_controller.test_appointment_delete);
router.post('/appointment/editAppointment', appointment_controller.test_appointment_edit);
router.post('/appointment/viewAppointment', appointment_controller.test_appointment_detail);

router.post('/addLog',log_controller.patientLog_add);
router.post('/viewLog',log_controller.log_detail);

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
router.get('/view-appointment', function(req, res, next) {
    res.render('view-appointment', { title: 'Express' });
});
router.get('/view-testAppointment', function(req, res, next) {
    res.render('view-testAppointment', { title: 'Express' });
});
router.get('/prescribe-medicine', function(req, res, next) {
    res.render('prescribe-medicine', { title: 'Express' });
});
router.get('/prescribe-test', function(req, res, next) {
    res.render('prescribe-test', { title: 'Express' });
});
router.get('/patient-log', function(req, res, next) {
    res.render('patient-log', { title: 'Express' });
});

module.exports = router;
