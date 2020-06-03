import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewLabAssistantsComponent } from './view-lab-assistants/view-lab-assistants.component';
import { ViewSpecificLabassistantComponent } from './view-specific-labassistant/view-specific-labassistant.component';
import { EditLabassistantComponent } from './edit-labassistant/edit-labassistant.component';
import { AddTestComponent } from './add-test/add-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewSpecificTestComponent } from './view-specific-test/view-specific-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { AddLabassistantComponent } from './add-labassistant/add-labassistant.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BasicComponent } from './basic/basic.component';


@NgModule({
  declarations: [ViewLabAssistantsComponent, ViewSpecificLabassistantComponent, EditLabassistantComponent, AddTestComponent, ViewTestsComponent, ViewSpecificTestComponent, EditTestComponent, AddLabassistantComponent, AdminHomeComponent, ChangePasswordComponent, BasicComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
