import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'autotme-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {


  constructor() { }
  telegramChannelName: string | undefined;
  isOtpGenerationSuccesful:boolean=false;
  ngOnInit(): void {

  }

  generateOTP(){
    
  console.log("generate otp")

  }
}
