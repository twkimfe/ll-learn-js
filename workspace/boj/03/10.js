/*
제목: 별 찍기 - 2
설명: 별을 찍는 문제 2
제출: https://www.acmicpc.net/submit/2439

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

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

/*
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(fileData[0]);

// ai 수정 코드
let result = "";
for (i = 1; i <= n; i++) {
  let line = "";
  // n-i개 공백 추가
  for (j = 1; j <= n - i; j++) {
    line += " ";
  }
  // i개 별 추가
  for (j = 1; j <= i; j++) {
    line += "*";
  }

  result += line + "\n";
}
console.log(result);

개인 코드, 오답
let star = "";
let space = " ";
let result = "";

for (i = 1; i <= n; i++) {
  space += " ";
  for (i = 1; i <= n; i++) {
    star += "*";
  }

  result += space + star + "\n";
}
console.log(result);
*/

/**
 * 표준 입력장치(콘솔)에서 여러줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];

  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
      result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
    }
    return result.length === 1 ? result[0] : result;
  }
}

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성

  for (let i = 1; i <= data; i++) {
    let space = " ".repeat(data - i);
    let stars = "*".repeat(i);

    console.log(space + stars);
  }
}
main();
