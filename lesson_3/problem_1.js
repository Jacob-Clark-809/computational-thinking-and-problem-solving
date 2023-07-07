/*
Problem:
Input - string of digits and perhaps special characters
Output - 10 digit string representing either the cleaned up number or a string
         of 10 zeros in the case of bad input.
Rules are explicited from th equestion.

Algorithm:
- Replace any non digit characters
- Check for length less than 10, return '0000000000' if so
- Check for lengh === 10, return clean string is so
- Check for length 11 and first digit === 1, return slice of string from
first index if so
- Else return '0000000000'
*/

function cleanPhoneNumber(number) {
  let defaultNumber = '0000000000';
  number = number.replace(/[^\d]/g, '');
  if (number.length < 10) {
    return defaultNumber;
  } else if (number.length === 10) {
    return number;
  } else if (number.length === 11 && number[0] === '1') {
    return number.slice(1);
  } else {
    return defaultNumber;
  }
}

console.log(cleanPhoneNumber('1234567890')); // '1234567890'
console.log(cleanPhoneNumber('7856341212')); // '7856341212'
console.log(cleanPhoneNumber('12345678901')); // 2345678901
console.log(cleanPhoneNumber('10987654321')); // 0987654321
console.log(cleanPhoneNumber('1234')); // 0000000000
console.log(cleanPhoneNumber('698789')); // 0000000000
console.log(cleanPhoneNumber('09876543210')); // 0000000000
console.log(cleanPhoneNumber('1234567891011')); // 0000000000
console.log(cleanPhoneNumber('123asdf()___4567890')); // 1234567890
console.log(cleanPhoneNumber('785_6 34_1212')); // '7856341212'
console.log(cleanPhoneNumber('1234**5 __67890f1')); // 2345678901
console.log(cleanPhoneNumber('1234jahs_*')); // 0000000000



