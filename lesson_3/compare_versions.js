/*
Problem: - compare two version numbers to see which represents a later version
of the software.
- Need to break down a version number into parts e.g. 1.11.3 => [1, 11, 3]
- Then compare the version numbers part by part. If any individual part is
larger than the other than that whole version number is greater, so long as
we have traversed the parts from left to right
Input: - two strings with digits seperated by dots
 - should start and end with a digit
Output: - -1 if version1 < version2
        - 0 if version1 === version2
        - 1 if version1 > version2
        - null if version contains characters other than digits and .

Data types: - string input converted to an array of string numbers
- return number value

Algorith:
- split string on .s into array of string digits
- compare element by element of each version array
- compare by converting to numbers
- if one array shorter then convert undefined values to 0
- if at any point the number values are different then stop comparison
and store corresponding return value.
*/

function compareVersions(version1, version2) {
  if (invalidVersion(version1) || invalidVersion(version2)) {
    return null;
  }

  let version1Array = version1.split('.');
  let version2Array = version2.split('.');
  let length = version1Array.length > version2Array.length ?
               version1Array.length : version2Array.length;

  for (let index = 0; index < length; index += 1) {
    let version1Element = version1Array[index] || '0';
    let version2Element = version2Array[index] || '0';

    if (Number(version1Element) > Number(version2Element)) {
      return 1;
    } else if (Number(version2Element) > Number(version1Element)) {
      return -1;
    }
  }

  return 0;
}

function invalidVersion(version) {
  return version.match(/[^\d.]/) ||
         !version ||
         version.match(/\.\.+/) ||
         version.startsWith('.') ||
         version.endsWith('.');
}

console.log(compareVersions('1.6.3', '0.5.4')); // 1
console.log(compareVersions('1.0.0', '1')); // 0
console.log(compareVersions('0.51.3', '1.31.2')); // -1
console.log(compareVersions('hello', '0.5.4')); // null
console.log(compareVersions('0.5.4', '5.6.4.')); // null
console.log(compareVersions('51.26.3.0.0.0.0.1', '51.26.3')) // 1
console.log(compareVersions('', '0.5.4')); // null
console.log(compareVersions('0..9', '5.4')); // null
console.log(compareVersions('.5.4', '0.9')); // null

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1


