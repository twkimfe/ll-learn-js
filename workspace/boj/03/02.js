/*
제목: A+B - 3
설명: A+B를 여러 번 출력하는 문제
제출: https://www.acmicpc.net/submit/10950

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
*/

/*
ai 수정, 제출 문제
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");
// console.log(fileData);

const t = parseInt(fileData[0]);
// console.log(t);

for (let i = 1; i <= t; i++) {
  const data = fileData[i].split(" ");
  const a = Number(data[0]);
  const b = Number(data[1]);
  console.log(a + b);
}
*/

/**
 * 표준 입력장치(콘솔)에서 n 줄로 입력된 줄당 n 건의 데이터를 읽어서 숫자로 변환한 후 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = []; // 2차원 배열 리턴

  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}

function main() {
  const data = getData();
  // console.log(data);

  for (let i = 1; i < data.length; i++) {
    const rowArr = data[i];
    console.log(rowArr[0] + rowArr[1]);
  }
}
main();
