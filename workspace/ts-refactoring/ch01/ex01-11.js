/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

//  > 크다
console.log(a > b);
// < 작다
console.log(a < b);
// >=크거나 같다
console.log(a >= d);
// <= 작거나 같다
console.log(a <= b);

// 문자열 비교
console.log(a == c); // 동등 비교, true 반환
console.log(a === c); //일치 비교, false 반환

console.log("ch05" > "ch01"); //true
console.log("ch12" > "ch2"); //false
