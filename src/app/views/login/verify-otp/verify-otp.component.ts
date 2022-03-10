import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  errormsg: string = '';
  otp: string | null = '';
  constructor(private router: Router, private loginService: LoginService) { }
  otpValue: string | undefined;
  isOtpGenerationSuccesful: boolean = false;
  ngOnInit(): void {
    this.otp = localStorage.getItem('otp');
  }

  verifyOTP() {

    if (this.otpValue) {
      this.loginService.verifyOtp(+this.otpValue,localStorage.getItem('channelName')).subscribe(data => {
        console.log(data);
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        this.errormsg = error.message;
      
      })
    }


  }

  enteredOtp(otp: any) {
    this.otpValue = otp.value;

  }
  regenerateOTP() {

    this.loginService.generateOTP(localStorage.getItem('channelName')).subscribe((data:any) => {
      console.log(data);
      this.otp= data.message.split(',')[1];
    }, error => {
      console.log(error);
      this.errormsg = error.message;

    })


  }
}
