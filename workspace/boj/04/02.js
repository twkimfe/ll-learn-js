/*
제목: X보다 작은 수
설명: 배열을 입력받고 X보다 작은 수를 찾는 문제
제출: https://www.acmicpc.net/submit/10871 

문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 
주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

예제 입력 1
10 5
1 10 4 9 2 3 8 5 7 6

예제 출력 1
1 4 2 3
*/

/* 개인 코드, 에러
function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const n = data[0][0];
  const x = data[0][1];
  const a = data[1][n];

  let result = "";
  for (let i = 0; i < n.length; i++) {
    if (a < x) {
      result += a + " ";
    } else {
      console.log("작은 값이 없습니다.");
    }
  }
  console.log(result);
  console.log(x);
}
main();
*/

// ai 검토 후 수정
function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const x = data[0][1];
  const a = data[1];

  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] < x) {
      result += a[i] + " ";
    }
  }
  console.log(result.trim());
}
main();

/**
 * 표준 입력장치(콘솔)에서 여러줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  return fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((row) =>
      row.split(" ").map((val) => (isNaN(val) ? val : parseInt(val)))
    );
}
