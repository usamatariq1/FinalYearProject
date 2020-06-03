import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddLabassistantComponent } from './add-labassistant/add-labassistant.component';
import { ViewLabAssistantsComponent } from './view-lab-assistants/view-lab-assistants.component';
import { ViewSpecificLabassistantComponent } from './view-specific-labassistant/view-specific-labassistant.component';
import { EditLabassistantComponent } from './edit-labassistant/edit-labassistant.component';
import { AddTestComponent } from './add-test/add-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewSpecificTestComponent } from './view-specific-test/view-specific-test.component';

import { BasicComponent } from './basic/basic.component'

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
        {path: '',component: BasicComponent},
        { path: 'addLabAssistant', component: AddLabassistantComponent },
        { path: 'viewLabAssistants', component: ViewLabAssistantsComponent },
        { path: 'viewSpecificLabAssistant', component: ViewSpecificLabassistantComponent },
        { path: 'editLabAssistant', component: EditLabassistantComponent },
        { path: 'addTest', component: AddTestComponent },
        { path: 'editTest', component: EditTestComponent },
        { path: 'viewTests', component: ViewTestsComponent },
        { path: 'viewSpecificTest', component: ViewSpecificTestComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
