function isUrl(url) {
  console.log(!!url.match(/^https?:\/\/\S+$/));
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false