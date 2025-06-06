/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
// console.log(inputData);
const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

// b의 각 자리 숫자 추출
const b_1 = b % 10; // 일의 자리
const b_10 = Math.floor((b % 100) / 10); // 십의 자리
const b_100 = Math.floor(b / 100); // 백의 자리

console.log(a * b_1);
console.log(a * b_10);
console.log(a * b_100);
console.log(a * b);
