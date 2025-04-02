/*
반복문 - while문
*/

// 1부터 10까지 홀수의 합계 출력. 25
// 1부터 10까지 짝수의 합계 출력. 30

// 개인 코드, 오답
/**
let i = 1;
let sum1 = 0;

while (i <= 10 && i % 2 !== 0) {
  sum1 += i;
  console.log(sum1);
  i++;
}
console.log(i);
while (i <= 10 && i % 2 === 0) {
  sum1 += i;
  console.log(sum1);
  i++;
}
console.log(i);
 */

// 동기 교육생 정답 코드 - 조현수
let odd = 0;
let even = 0;
let i = 0;
while (i <= 10) {
  //1부터 10까지 홀수의 합계
  if (i % 2 !== 0) {
    odd += i;
    i++;
  } else {
    //1부터 10까지 짝수의 합계
    even += i;
    i++;
  }
}
console.log(`홀수의 합계 ${odd} `);
console.log(`짝수의 합계 ${even}`);

// 강사 코드
i = 0;
let sum = 0;
// 1부터 10까지 홀수의 합계 출력. 25
while (i <= 10) {
  if (i % 2 === 1) {
    sum += i;
  }
  i++;
}
console.log(i, sum);

// 1부터 10까지 짝수의 합계 출력. 30
i = 2;
sum = 0;
while (i <= 10) {
  sum += i;
  i += 2;
}
console.log(i, sum);
