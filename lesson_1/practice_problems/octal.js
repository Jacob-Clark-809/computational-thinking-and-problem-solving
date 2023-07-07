/*
1. Convert string to array of numbers.
2. Map each number to decimal form.
3. Sum numbers up.
*/

function octalToDecimal(numberString) {
  let digits = numberString.split('').map(stringDigit => Number(stringDigit));
  digits.reverse();
  let decimalArray = digits.map((digit, index) => digit * Math.pow(8, index));

  console.log(decimalArray.reduce((sum, current) => sum + current));
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
