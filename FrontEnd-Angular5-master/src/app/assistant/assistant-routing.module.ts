import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssistantComponent } from './assistant/assistant.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewSpecificPatientComponent } from './view-specific-patient/view-specific-patient.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewSpecificTestComponent } from './view-specific-test/view-specific-test.component';
import { ViewSpecificLabAssistantComponent } from './view-specific-lab-assistant/view-specific-lab-assistant.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { BasicComponent } from './basic/basic.component'

const routes: Routes = [
  {
    path: '',
    component: AssistantComponent,
    children: [
        {path: '', component: BasicComponent},
        {path: 'viewPatients', component: ViewPatientsComponent},
        {path: 'viewSpecificPatient', component: ViewSpecificPatientComponent},
        {path: 'viewAppointments', component: ViewAppointmentsComponent},
        {path: 'viewTests', component: ViewTestsComponent},
        {path: 'viewSpecificTest', component: ViewSpecificTestComponent},
        {path: 'myProfile', component: ViewSpecificLabAssistantComponent},
        {path: 'changePassword', component: ChangePasswordComponent},
  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistantRoutingModule { }
