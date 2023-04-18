import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/component/login/login.component';
import { RegisterFormComponent } from './shared/component/register-form/register-form.component';
import { ListComponent } from './shared/component/list/list.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { AuthguardService } from './shared/service/authgardservice.service';

const routes: Routes = [
  {
    path:'', redirectTo : 'login', pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterFormComponent
  },
  {
    path:'list', component: ListComponent,canActivate:[AuthguardService]
  }, 
  {
    path:'register/:id', component:RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
