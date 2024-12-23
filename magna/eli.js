function pad(number, paddingCharacter, length) {
  var str = '' + number;
  while (str.length < length) {
    str = paddingCharacter + str;
  }
  return str;
}

var d = new Date();
var year = d.getFullYear() % 10000;
var paddedYear = pad(year, '0', 4);
return paddedYear;
