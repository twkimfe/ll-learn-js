/*
제목: 공 바꾸기
설명: 배열의 값을 교환하는 문제
제출: https://www.acmicpc.net/submit/10813

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
도현이는 앞으로 M번 공을 바꾸려고 한다. 
도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 
각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 공을 교환한다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

예제 입력 1 
5 4
1 2 // 2 1 3 4 5
3 4 // 2 1 4 3 5
1 4 // 3 1 4 2 5
2 2 // 3 1 4 2 5

5 4
1 2
3 4
1 4
2 2

예제 출력 1 
3 1 4 2 5

[예제 1]
입력:
7 3
2 5
4 7
1 3
출력:
3 5 1 7 2 6 4

[예제 2]
입력:
4 2
1 4
2 3
출력:
4 3 2 1

[예제 3]
입력:
6 5
1 6
2 4
3 5
2 5
1 4
출력:
2 3 5 6 4 1
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

// 개인 코드, 제출 오답
function main() {
  const data = getData();
  const n = data[0][0];
  const m = data[0][1];

  let firstArr = [];

  for (let i = 1; i <= n; i++) {
    firstArr.push(i);
  }
  const result = firstArr.map((val) => (isNaN(val) ? val : parseInt(val)));
  //  console.log(result);

  for (let i = 1; i <= m; i++) {
    const rowArr = data[i];
    const a = rowArr[0];
    const b = rowArr[1];
    let c = result[a - 1];
    let d = result[b - 1];
    result[b - 1] = c;
    result[a - 1] = d;
  }
  /* 오답 부분
  console.log(result);
  */
    console.log(result.join(" "));
}

main();
