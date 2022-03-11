import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PasswordModule} from 'primeng/password';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import {CardModule} from 'primeng/card';
import { SmartMsgComponent } from './views/smart-msg/smart-msg.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import { LoginOtpComponent } from './views/login/login-otp/login-otp.component';
import { VerifyOtpComponent } from './views/login/verify-otp/verify-otp.component';
import {TooltipModule} from 'primeng/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SmartMsgComponent,
    LoginOtpComponent,
    VerifyOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule, 
    RadioButtonModule,
    InputTextareaModule,
    FieldsetModule,
    CalendarModule,
    InputNumberModule,
    TooltipModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
