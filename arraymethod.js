//bodlogo-1 Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
let array = [1, 2, 3, 4];
array.splice(5, 0, 5);
console.log(array);

//bodlogo-2 Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]
// array = [];

//bodlogo 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
array = prompt("taslalaar tusgaarlan tonuudiig oruulna uu");

let array1 = array.split(","),
  sum = 0,
  avg = 0;
for (i = 0; i < array1.length; i++) {
  array1[i] = parseInt(array1[i]);
  sum += array1[i];
  avg = sum / array1.length;
}
console.log("niilber= ", sum, "avg = ", avg);
//bodlogo 4
