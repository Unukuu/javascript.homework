//bodlogo-1 Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
let array = [1, 2, 3, 4];
function pusharr(arrpush, digit) {
  array.push(digit);
  return array;
}
let newarray = pusharr(array, 10);
console.log(newarray);
//bodlogo-2 Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]
let oldarr = [];
function newarr(urt) {
  for (i = 0; i < urt; i++) {
    oldarr.push(Math.floor(Math.random() * 100));
  }
  return oldarr;
}
let oldarr1 = newarr(100);
console.log(oldarr1);

//bodlogo 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
function sumArr(arr) {
  let sum = 0;
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return sum;
}

const values = prompt("taslalaar tusgaarlan tonuudiig oruulna uu");

const sArr = values.split(",");
const numbers = [];
for (let i = 0; i < sArr.length; i++) {
  numbers.push(parseFloat(sArr[i]));
}

const s = sumArr(numbers);
console.log(s);
//bodlogo 4 Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
let text = "the quick brown fox";
let text1 = text.split(" ");
function upcase() {
  for (i = 0; i < text1.length; i++) {
    text1[i] = text1[i].toUpperCase;
  }
}
console.log(text1);
