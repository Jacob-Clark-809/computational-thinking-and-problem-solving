let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let firstLetters = names.map(name => name[0]);
let count = firstLetters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

let letter = Object.keys(count).reduce((mostFrequent, current) => {
  if (count[mostFrequent] > count[current]) {
    return mostFrequent;
  } else {
    return current;
  }
});

console.log(letter);
