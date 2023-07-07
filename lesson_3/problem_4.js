/*
Input: String of digits and separators
Output: All numbers included in the range

Rules:
- Number always increasing
- Only significant part of number is included
- Ranges are declared by a separator
- Possible separators for ranges are ['-', ':', '..']
- ', ' delimiter means skip numbers in between the digits on either side

Data types: - string input
            - split into delimiter array and digit array
            - generate result arry containing all digits as numbers

Algorithm:
- Split on digits into delimiter array and then map all range delimiters to
'R' and all comma delimiters to 'S' (skip)
- Split on delimiters into array of digits
- Declare result array and push first digit of digit array to it. Use shift so
that element is also removed from digit array.
- Iterate through the remaining array of digits
- On each iteration check delimiter type corresponding that index
- In both cases we increment the last element in result array until it ends
with the digit/digits of the current array of digits element
- If delimiter type is 'R' add each incrementation to result array. Otherwise,
only add the last incrementation.
*/

function shortHandRange(range) {
  let rangeDelimiters = ["-", ":", ".."];
  let delimiterArray = range.match(/-|:|\.\.|, /g);
  let digitsArray = range.match(/\d+/g);
  let result = [];
  result.push(Number(digitsArray.shift()));

  digitsArray.forEach((stringDigit, index) => {
    let incrementor = result[result.length - 1] + 1;
    while (!String(incrementor).endsWith(stringDigit)) {
      if (rangeDelimiters.includes(delimiterArray[index])) {
        result.push(incrementor);
      }

      incrementor += 1;
    }
    result.push(incrementor);
  });

  return result;
}

console.log(shortHandRange("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(shortHandRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(shortHandRange("1:5..2")); // [1, 2, 3, 4, 5, 6, ... 12]
console.log(shortHandRange("104-2")); // [104, 105, ... 112]
console.log(shortHandRange("104-02")); // [104, 105, ... 202]
console.log(shortHandRange("545, 64:11")); // [545, 564, 565, .. 611]
