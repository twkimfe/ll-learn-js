/*
기본값 매개변수(Default parameters)
*/

// b가 전달되지 않을 경우에는 a만 반환
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
console.log(sum(50)); //NaN 반환
console.log(typeof sum(50)); //number 반환
