import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientHomeComponent } from './patient-home/patient-home.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { ViewSpecificPatientComponent } from './view-specific-patient/view-specific-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { ChangePasswordComponent } from './change-password/change-password.component'

import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { ViewSpecificAppointmentComponent } from './view-specific-appointment/view-specific-appointment.component';

import { ViewSpecificTestComponent } from './view-specific-test/view-specific-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

import { PatientLogComponent } from './patient-log/patient-log.component';

import { BasicComponent } from './basic/basic.component'


const routes: Routes = [
  {
    path: '',
    component: PatientHomeComponent,
    children: [
      {path: '', component: BasicComponent},
      { path: 'sign-up', component: SignupComponent },
      { path: 'viewSpecificPatient', component: ViewSpecificPatientComponent },
      { path: 'editPatient', component: EditPatientComponent },
      { path: 'bookAppointment', component: BookAppointmentComponent },
      { path: 'editAppointment', component: EditAppointmentComponent },
      { path: 'myAppointments', component: ViewSpecificAppointmentComponent },
      { path: 'viewTests', component: ViewTestsComponent },
      { path: 'viewSpecificTest', component: ViewSpecificTestComponent },
      { path: 'viewLog', component: PatientLogComponent},
      { path: 'changePassword', component: ChangePasswordComponent}
]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
