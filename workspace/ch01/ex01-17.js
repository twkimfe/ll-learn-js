/*
if-else문

if (조건식){
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
...
} else {
조건식이 거짓일때 실행할 코드;
조건식이 거짓일때 실행할 코드;
조건식이 거짓일때 실행할 코드; 
...
}
 */

const age = 15;
// age가 20 이상이면 "성인" 출력, 아닐 시 "미성년자" 출력
if (age >= 20) {
  console.log("성인");
} else {
  console.log("미성년자");
}

const num = -10;
// num이 양수이면 "양수" 출력, 아닐 시 "음수 출력"
if (num > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// num이 음수이면 "음수" 출력, 아닐 시 "0" 출력
if (num < 0) {
  console.log("음수");
} else {
  console.log(0);
}

const password = 1234;
// password가 1234면 "로그인 성공!" 출력, 아닐 시 "로그인 실패!" 출력
if (password === 1234) {
  console.log("로그인 성공");
} else {
  console.log("로그인 실패");
}

const num2 = 342340;
// num2가 짝수이면 "짝수" 출력, 홀수일 때 "홀수" 출력, 단 num2 > 0
if (num2 % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

const num3 = 12;
// num3가 3의 배수이면 "3의 배수" 출력, 아닐 시 "3의 배수가 아님" 출력
if (num3 % 3 === 0) {
  console.log("3의 배수");
} else {
  console.log("3의 배수가 아니다");
}
