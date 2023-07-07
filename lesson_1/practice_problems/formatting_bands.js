let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    return {
      name: removeDots(capitalizeAllWords(band.name)),
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalize(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

function capitalizeAllWords(sentence) {
  return sentence.split(' ').map(capitalize).join(' ');
}

function removeDots(sentence) {
  return sentence.split('').filter(letter => letter !== '.').join('');
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
];
