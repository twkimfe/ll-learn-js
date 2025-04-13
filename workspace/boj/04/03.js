/*
https://www.acmicpc.net/submit/10818
제목: 최소, 최대
설명: 최솟값과 최댓값을 찾는 문제
제출: 

문제
N개의 정수가 주어진다. 
이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7

예제 출력 1
7 35
*/

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

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const num = data[1];
  let minNum = num[0];
  let maxNum = num[0];

  // 방법1 남은 요소와 비교하여 업데이트
  for (let i = 1; i < num.length; i++) {
    if (num[i] < minNum) {
      minNum = num[i];
    }
    if (num[i] > maxNum) {
      maxNum = num[i];
    }
  }

  /* 방법2
   let minNum = 0;
   let maxNum = 0;
  minNum = Math.min(...num);
  maxNum = Math.max(...num);
*/

  console.log(minNum, maxNum);
}
main();
