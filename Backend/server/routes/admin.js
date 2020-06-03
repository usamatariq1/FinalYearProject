var express = require('express');
var router = express.Router();

var admin_controller = require('../controller/Admin');
var patient_controller = require('../controller/Patient');
var labAssistant_controller = require('../controller/LabAssistant');
var test_controller = require('../controller/Test')


/* GET home page. */
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
});

router.post('/labAssistant/signup', labAssistant_controller.lab_assistant_add);
router.post('/labAssistant/update',labAssistant_controller.lab_assistant_edit);
router.post('/labAssistant/detail',labAssistant_controller.lab_assistant_detail);
router.get('/labAssistant/list',labAssistant_controller.lab_assistant_list);
router.post('/labAssistant/delete',labAssistant_controller.lab_assistant_delete);

router.post('/test/add', test_controller.test_add);
router.post('/test/edit',test_controller.test_edit);
router.post('/test/detail',test_controller.test_detail);
router.get('/test/list',test_controller.test_list);
router.post('/test/delete',test_controller.test_delete);

router.get('/patient/list',patient_controller.patient_list);

router.post('/signin',admin_controller.admin_login);

// router.get('/view-appointment', function(req, res, next) {
//     res.render('view-appointment', { title: 'Express' });
// });
// router.get('/doctor-approval', function(req, res, next) {
//     res.render('doctor-approval', { title: 'Express' });
// });
// router.get('/lab-assistant-approval', function(req, res, next) {
//     res.render('lab-assistant-approval', { title: 'Express' });
// });
router.get('/', admin_controller.admin_list);
// router.get('/view-testAppointment', function(req, res, next) {
//     res.render('view-testAppointment', { title: 'Express' });
// });
// router.get('/patient-log', function(req, res, next) {
//     res.render('patient-log', { title: 'Express' });
// });

module.exports = router;
