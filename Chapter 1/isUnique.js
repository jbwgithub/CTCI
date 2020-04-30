function isUnique(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    } else {
      hash[str[i]] = true;
    }
  }

  return true;
}

console.log(isUnique('test') === false);
console.log(isUnique('no') === true);
console.log(isUnique('unique') === false);
