/*
Call by Value와 Call by Reference 차이
*/

function add10(data1, data2) {
  data1 += 10;
  data2[0] += 10;

  console.log("함수 내부", data1, data2[0]);
}
let d1 = 80;
let d2 = [80];
// 값 타입(d1)은 복사돼서 안 바뀜
// 참조 타입(d2)은 주소 공유하니까 직접 값이 바뀜

console.log("함수 호출 이전", d1, d2[0]);
add10(d1, d2);
console.log("함수 호출 이후", d1, d2[0]);
