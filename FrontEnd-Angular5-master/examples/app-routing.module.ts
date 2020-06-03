import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './template/dashboard/dashboard.component';
import { FormsComponent } from './template/forms/forms.component';
import { ButtonsComponent } from './template/buttons/buttons.component';
import { TablesComponent } from './template/tables/tables.component';
import { IconsComponent } from './template/icons/icons.component';
import { TypographyComponent } from './template/typography/typography.component';
import { AlertsComponent } from './template/alerts/alerts.component';
import { AccordionsComponent } from './template/accordions/accordions.component';
import { BadgesComponent } from './template/badges/badges.component';
import { ProgressbarComponent } from './template/progressbar/progressbar.component';
import { BreadcrumbsComponent } from './template/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './template/pagination/pagination.component';
import { DropdownComponent } from './template/dropdown/dropdown.component';
import { TooltipsComponent } from './template/tooltips/tooltips.component';
import { CarouselComponent } from './template/carousel/carousel.component';
import { TabsComponent } from './template/tabs/tabs.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'student', loadChildren: ()=>import('./student/student.module').then(mod => mod.StudentModule)},
  { path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(mod => mod.AdminModule)},
  { path: 'teacher', loadChildren: ()=>import('./teacher/teacher.module').then(mod => mod.TeacherModule)},
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'forms', component: FormsComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'tables', component: TablesComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordions', component: AccordionsComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'progressbar', component: ProgressbarComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'dropdowns', component: DropdownComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'tabs', component: TabsComponent },
  { path: '**', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
