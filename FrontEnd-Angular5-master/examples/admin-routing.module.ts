import { GroupDetailsComponent } from './group-details/group-details.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { GroupListComponent } from './group-list/group-list.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
      path: '',
      children: [
        { path: 'manage_students/add', component: AddStudentComponent },
        { path: 'manage_students/listall', component: StudentListComponent },
        { path: 'manage_students', redirectTo: "/admin/manage_students/listall", pathMatch: 'full' },
        { path: 'manage_teachers/add', component: AddTeacherComponent },
        { path: 'manage_teachers/listall', component: TeacherListComponent },
        { path: 'manage_teachers', redirectTo: "/admin/manage_teachers/listall", pathMatch: 'full' },
        { path: 'manage_courses/add', component: AddCourseComponent },
        { path: 'manage_courses/listall', component: CourseListComponent },
        { path: 'manage_courses/', redirectTo: "/admin/manage_courses/listall", pathMatch: 'full' },
        { path: 'manage_groups/add', component: CreateGroupComponent },
        { path: 'manage_groups/listall', component: GroupListComponent },
        { path: 'manage_groups/details', component: GroupDetailsComponent },
        { path: 'manage_groups/', redirectTo: "/admin/manage_groups/listall", pathMatch: 'full' },
        { path: 'settings', component: SettingsComponent },

      ]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
