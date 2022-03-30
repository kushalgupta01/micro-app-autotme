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
import {SidebarModule} from 'primeng/sidebar';
import {DividerModule} from 'primeng/divider';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { SetupSocialMediaComponent } from './views/setup-social-media/setup-social-media.component';
import { SocialMediaLinkRendererComponent } from './views/shared/social-media-link-renderer/social-media-link-renderer.component';
import { MyLinksPageComponent } from './views/my-links-page/my-links-page.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SmartMsgComponent,
    LoginOtpComponent,
    VerifyOtpComponent,
    SetupSocialMediaComponent,
    SocialMediaLinkRendererComponent,
    MyLinksPageComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    AppRoutingModule,
    PasswordModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,TableModule,
    HttpClientModule, 
    RadioButtonModule,
    InputTextareaModule,
    FieldsetModule,
    CalendarModule,
    InputNumberModule,
    TooltipModule,
    SidebarModule,
    DividerModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
