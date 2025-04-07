/*
제목: A+B
설명: 두 수를 입력받고 합을 출력하는 문제
제출: https://www.acmicpc.net/submit/1000

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.

예제 입력 1
1 2

예제 출력 1
3
*/

/*
과거 제출 답안
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);
const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

console.log(a + b);
*/

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후, 객체에 a, b 속성으로 저장하여 변환한다.
 * @returns {Object} a, b속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();
  // 객체로 여러 값을 한 번에 반환
  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);

  return result;
}

function main() {
  const data = getData();

  console.log(data.a + data.b);
}
main();