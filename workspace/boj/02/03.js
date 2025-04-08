/*
제목: 윤년
설명: 윤년을 판별하는 문제
제출: https://www.acmicpc.net/submit/2753

문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

입력
첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

출력
첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

예제 입력 1
2000
예제 출력 1
1

예제 입력 2
1999
예제 출력 2
0
*/

/* 개인코드
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

const year = parseInt(fileData[0]);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(1);
} else console.log(0);
*/

// 강사 코드

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
  //data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
}
main();

function main() {
  const data = getData();

  let result = 0; // 초기값은 윤년이 아님

  // 윤년이 되는 경우
  //4의 배수 && (100의 배수가 아니거나 400의 배수)
  if (data % 4 === 0 && (data % 100 !== 0 || data % 400 === 0)) {
    result = 1;
  }
  console.log(result);
}
main();
