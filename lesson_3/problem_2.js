/*
Input: - string of digits
Output: true if valid per Luhn formula, false otherwise
Luhn formula: From right to left - double every second digit
                                 - if > 10 after doubling, subtract 9
                                 - sum resulting digits
                                 - if sum % 10 === 0 then valid
- Remove any non-digits from the string

Data types: string input, convert to an array of number digits, sum into a
number, return true or false

Algorithm:
- Replace non-digit characters with empty string
- Split string into array of string digits, then map to array of number digits
- Reverse the array
- Map the array, changing ever second element (odd indexes) to double its value
and then -9 if >= 10 and leaving other elements unchanged
- Reduce the array to a sum of elements
- Return sum % 10 === 0
*/

function validLuhn(number) {
  number = number.replace(/\D/g, '');
  let digits = number.split('').map(Number).reverse();
  let checkSum = digits.map((digit, index) => {
    if (index % 2 === 1) {
      digit = digit * 2;
      if (digit >= 10) {
        digit -= 9;
      }
    }
    return digit;
  }).reduce((sum, value) => sum + value);

  return checkSum % 10 === 0;
}

console.log(validLuhn('1111')); // false
console.log(validLuhn('8763')); // true
console.log(validLuhn('2323 2005 7766 3554')); // true

console.log(validLuhn('1-1__ 11')); // false
console.log(validLuhn('8asdf*(*763')); // true
console.log(validLuhn('23d23 2_l005d* 7766 3554')); // true
