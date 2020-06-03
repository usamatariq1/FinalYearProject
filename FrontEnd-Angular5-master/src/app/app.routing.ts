import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'signup',
    component: SignupComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'assistant', 
    loadChildren: ()=>import('./assistant/assistant.module').then(mod => mod.AssistantModule)
  },
  { path: 'admin', 
    loadChildren: ()=>import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  { path: 'patient', 
    loadChildren: ()=>import('./patient/patient.module').then(mod => mod.PatientModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}