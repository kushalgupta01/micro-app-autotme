import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginOtpComponent } from './views/login/login-otp/login-otp.component';
import { LoginComponent } from './views/login/login.component';
import { VerifyOtpComponent } from './views/login/verify-otp/verify-otp.component';
import { SmartMsgComponent } from './views/smart-msg/smart-msg.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginOtpComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'home',canActivate:[AuthGuard], component: HomeComponent },
  { path: 'set-message', component: SmartMsgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
