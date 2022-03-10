export const BASE_URL = 'https://autot.me/api/v1';
export const GENERATE_OTP = (mobileNumber:number,channelName:string)=>`${BASE_URL}/get_otp?mobile=${mobileNumber}&telegram_link=https://t.me/${channelName}`
export const VERIFY_OTP = (mobileNumber:number,channelName:string, code:number)=>`${BASE_URL}/get_otp?mobile=${mobileNumber}&telegram_link=https://t.me/${channelName}&code=${code}`