/*
반복문 - for문
*/

// 1부터 10까지의 모든 수의 합계를 출력

// while문
// let sum = 0;
// let i = 1;// 초기화
// while (i < 10) { // 조건식
//   sum += i; // 실행할 코드
//   i++; // 증감식
// }

// for문
let sum = 0;
for (let i = 1; i <= 10; i++) {
  // 초기화, 조건식, 증감식
  sum += i; // 실행할 코드
  console.log(i, sum);
}

// 1부터 10까지 홀수의 합계 출력. 25
sum = 0;
for (let i = 1; i <= 10; i += 2) {
  sum += i;
}
console.log("홀수 합계", sum);

// 1부터 10까지 짝수의 합계 출력. 30
sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log("짝수 합계", sum);
