import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GENERATE_OTP, IS_USER_REGISTERED, VERIFY_OTP } from '../autotme-urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) {
    
  }

  isUserRegistered(channelname:string | null){
    const headers={'content-type':'application/json'};
    const body = {'telegram_link':`https://t.me/${channelname}`}
    return this.http.post(IS_USER_REGISTERED(channelname),body,{'headers':headers});
  }

  verifyOtp(otp:number,channelname:string | null) {
    return this.http.get(VERIFY_OTP(9619495380,channelname,otp));
  }

  generateOTP(channelname:string | null){
    return this.http.get(GENERATE_OTP(9619495380,channelname));
  }
}
