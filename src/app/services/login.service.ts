import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GENERATE_OTP, VERIFY_OTP } from '../autotme-urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  verifyOtp(otp:number,channelname:string | null) {
    return this.http.get(VERIFY_OTP(9619495380,channelname,otp));
  }

  constructor(private http:HttpClient) {
    
   }


  generateOTP(channelname:string | null){
    return this.http.get(GENERATE_OTP(9619495380,channelname));
  }
}
