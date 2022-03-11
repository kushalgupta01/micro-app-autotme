export const BASE_URL = 'https://autot.me/api/v1';
export const GENERATE_OTP = (mobileNumber:number,channelName:string | null)=>`${BASE_URL}/get_otp?mobile=${mobileNumber}&telegram_link=${channelName}`
export const VERIFY_OTP = (mobileNumber:number,channelName:string | null, code:number)=>`${BASE_URL}/verify_otp?mobile=${mobileNumber}&telegram_link=${channelName}&code=${code}`
export const IS_USER_REGISTERED = (channelName:string | null)=>`${BASE_URL}/check_telegram_user`