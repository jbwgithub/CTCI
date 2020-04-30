function URLify(str) {
  return str.split(' ').join('%20');
}

console.log(URLify('Mr John Smith    '));
