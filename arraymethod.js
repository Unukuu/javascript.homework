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
text = text.split(" ");
let uppercap = [];
function capital(upcase) {
  for (i = 0; i < upcase.length; i++) {
    let words = upcase[i];
    const firstLetterUpper = words[0].toUpperCase();
    const restWords = words.slice(1);
    const newwords = firstLetterUpper + restWords;
    uppercap.push(newwords);
  }
  return uppercap;
}
let m = capital(text);
console.log(m);
//bodlogo 5 Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']

text = ["hello", "world", "javascript", "array"];
text1 = [];
function textrev(arrtext) {
  for (i = 0; i < arrtext.length; i++) {
    let urvuu = arrtext[i];
    let alpha = urvuu.split("");
    let revword = alpha.reverse();
    revword = revword.join("");
    text1.push(revword);
  }
  return text1;
}
let mn = textrev(text);
console.log(mn);
//bodlogo 6 Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
let searchsec = prompt("haih text ee oruulna uu");
text = "Hello world animal world fox cow horse";
text = text.split(" ");
function hailt(text1, ug) {
  console.log("Index", text1.indexOf(ug));
  if (text1.indexOf(ug) !== -1) {
    return true;
  } else {
    return false;
  }
}
let nm = hailt(text, searchsec);
console.log(nm);
