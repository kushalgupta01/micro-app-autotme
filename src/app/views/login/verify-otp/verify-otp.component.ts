import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'autotme-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  constructor() { }
  otpValue: string | undefined;
  isOtpGenerationSuccesful:boolean=false;
  ngOnInit(): void {

  }

  verifyOTP(){
    
  console.log("verifyOTP otp")

  }

  enteredOtp(otp:any){
    this.otpValue = otp.value;
 
  }
}
