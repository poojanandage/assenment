import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { LoginComponent } from './shared/component/login/login.component';
import { RegisterFormComponent } from './shared/component/register-form/register-form.component';
import { ListComponent } from './shared/component/list/list.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { MainDashboardComponent } from './shared/component/main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterFormComponent,
    ListComponent,
    SidebarComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
