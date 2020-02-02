export function ValidatePhone (phone) {
    let result = phone.match(/\+375(?=29|44|25|33)/);
    console.log(result);
    return phone.length === 13 && result 
  }