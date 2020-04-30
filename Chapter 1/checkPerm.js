function isPerm(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.split('').sort().join();
  str2 = str2.split('').sort().join();
  if (str1 !== str2) return false;

  return true;
}

console.log(isPerm('hi', 'hi') === true);
console.log(isPerm('3', '2') === false)
console.log(isPerm('up', 'down') === false);
console.log(isPerm('coding', 'gindoc') === true);
console.log(isPerm('rats', 'tars') === true);
