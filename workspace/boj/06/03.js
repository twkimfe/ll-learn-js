/*
제목: 별 찍기 - 7
설명: 🌟
제출: https://www.acmicpc.net/submit/2444

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
3
예제 출력 1
  *
 ***
*****
 ***
  *

예제 입력 2
4
예제 출력 2
    *
   ***
  *****
 *******
  *****
   ***
    *

예제 입력 3
5
예제 출력 3
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

// 참고 코드
// https://www.acmicpc.net/source/92804383
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ").map(Number);
// console.log(inputData);
let starUp = ''
let starDown = ''

// 위쪽 별 출력
for (let i = 0; i < inputData[0]; i++) {
  let line = "";

  // 위쪽 공백 추가
  line += " ".repeat(inputData[0] - 1 - i);
  // 위쪽 별 추가
  line += "*".repeat( 2 * i + 1 )
  starUp += line + "\n";
}

//ai 코드, 정답
// 아래쪽 별 출력
for (let i = 1; i < inputData[0]; i++) {
  let line = "";

  // 아래쪽 공백 추가
  line += " ".repeat(i)
  // 아래쪽 별 추가
  line += "*".repeat( 2 * ( inputData[0] - 1 -i ) + 1 );

  starDown += line + "\n";
}
let result = starUp + starDown;
console.log(result);

//개인 코드, 오답
// 아래쪽 별 출력
// for (let i = 1; i < inputData[0]; i++) {
//   let line = "";

//   // 아래쪽 공백 추가
//   line += " ".repeat(i)
//   // 아래쪽 별 추가
//   line += "*".repeat( 2 * i + 1 );

//   starDown += line + "\n";
// }
// console.log(starDown);