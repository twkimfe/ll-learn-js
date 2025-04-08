/*
제목: 별 찍기 - 1
설명: 별을 찍는 문제 1
제출: https://www.acmicpc.net/submit/2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
*
**
***
****
*****
*/

// ai 수정 코드
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(fileData[0]);
let star = "";
let result = "";

for (i = 1; i <= n; i++) {
  star += "*";
  result += star + "\n";
}
console.log(result);

// 개인 코드, 오답
/*
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(fileData[0]);
let result = "";
for (i = 1; n <= i; i++) {
  star = "*";
  result += star;
}

console.log(result);
*/
