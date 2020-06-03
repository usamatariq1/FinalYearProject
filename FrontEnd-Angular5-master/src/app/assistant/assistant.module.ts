import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantRoutingModule } from './assistant-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssistantComponent } from './assistant/assistant.component';
import { FormsModule } from '@angular/forms';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { ViewSpecificPatientComponent } from './view-specific-patient/view-specific-patient.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewSpecificTestComponent } from './view-specific-test/view-specific-test.component';
import { ViewSpecificLabAssistantComponent } from './view-specific-lab-assistant/view-specific-lab-assistant.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BasicComponent } from './basic/basic.component';



@NgModule({
  declarations: [AssistantComponent, ViewAppointmentsComponent, ViewSpecificPatientComponent, ViewPatientsComponent, ViewTestsComponent, ViewSpecificTestComponent, ViewSpecificLabAssistantComponent, ChangePasswordComponent, BasicComponent, ],
  imports: [
    CommonModule,
    AssistantRoutingModule,
    FormsModule,
  ]
})
export class AssistantModule { }
