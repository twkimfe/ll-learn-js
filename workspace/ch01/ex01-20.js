/*
반복문 - while문
*/

// 0부터 10까지 출력
let i = 0;
while (i <= 10) {
  console.log(i++);
}

console.log("-------");

// 1부터 10까지 모든 수의 합계 출력
i = 1;
let sum = 0;
while (i <= 10) {
  // i = 1~10
  sum += i; // sum = sum + i;
  console.log(sum);
  i++;
}
console.log(i);
console.log(sum);
