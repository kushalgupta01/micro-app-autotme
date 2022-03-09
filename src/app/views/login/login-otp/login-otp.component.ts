import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'autotme-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {


  constructor(private router: Router) { }
  telegramChannelName: string | undefined;
  isOtpGenerationSuccesful:boolean=false;
  ngOnInit(): void {

  }

  generateOTP(){
    
    this.router.navigate(['/verify-otp']);

  }
}
