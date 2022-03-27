import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginOtpComponent } from './views/login/login-otp/login-otp.component';
import { LoginComponent } from './views/login/login.component';
import { VerifyOtpComponent } from './views/login/verify-otp/verify-otp.component';
import { SetupSocialMediaComponent } from './views/setup-social-media/setup-social-media.component';
import { SmartMsgComponent } from './views/smart-msg/smart-msg.component';

//{ path: 'home',canActivate:[AuthGuard], component: HomeComponent },
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginOtpComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  
  { path: 'home', component: HomeComponent },
  { path: 'set-message', component: SmartMsgComponent },
  { path: 'setup-social-media', component: SetupSocialMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
