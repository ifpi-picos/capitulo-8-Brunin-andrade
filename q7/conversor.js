const convert = require('convert-units');

function diasParaMinutos(dias) {
  return convert(dias).from('d').to('min');
}

function gigabytesParaBytes(gb) {
  return convert(gb).from('GB').to('B');
}

const dias = 5;
const gb = 2;

console.log(`${dias} dias são ${diasParaMinutos(dias)} minutos.`);
console.log(`${gb} GB são ${gigabytesParaBytes(gb)} bytes.`);