/*
제목: A+B - 4
설명: 입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.
제출: https://www.acmicpc.net/submit/10951

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
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

/**
 * 표준 입력장치(콘솔)에서 n 줄로 입력된 줄당 n 건의 데이터를 읽어서 숫자로 변환한 후 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  // '23 48\n25\n'
  const fileData = fs.readFileSync(0).toString();
  // ['23 48', '25']
  const arr = fileData.trim().split("\n");

  const result = []; // 2차원 배열 리턴
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]; // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }

    result.push(rowArr);
  }
  return result;
}

let result = "";
function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성

  for (let i = 0; i < data.length; i++) {
    const a = data[i][0];
    const b = data[i][1];

    sum = a + b;
    result += sum + "\n";
  }
}
main();
console.log(result.trim());
