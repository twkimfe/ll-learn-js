/*
제목: 영수증
설명: 💸
제출: https://www.acmicpc.net/submit/25304

문제
준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 
그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 
준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.

영수증에 적힌, 구매한 각 물건의 가격과 개수, 구매한 물건들의 총 금액을 보고, 
구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

입력
첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다.
둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다.
이후 N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.

출력
구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.

제한
1 ≤ X ≤ 1,000,000,000
1 ≤ N ≤ 100
1 ≤ a ≤ 1,000,000
1 ≤ b ≤ 10

예제 입력 1
260000
4
20000 5
30000 2
10000 6
5000 8
예제 출력 1
Yes

예제 입력 2
250000
4
20000 5
30000 2
10000 6
5000 8
예제 출력 2
No

예제 입력 3
100000
1
100000 1
예제 출력 3
Yes

예제 입력 4
100000
1
50000 2
예제 출력 4
Yes

예제 입력 5
100000
2
40000 2
20000 1
예제 출력 5
Yes

예제 입력 6
100000
2
40000 2
30000 1
예제 출력 6
No

예제 입력 7
1000000000
10
100000000 10
예제 출력 7
Yes

예제 입력 8
500000
5
50000 2
60000 3
40000 1
70000 1
30000 2
예제 출력 8
No

예제 입력 9
500000
5
50000 2
60000 3
40000 1
70000 1
40000 2
예제 출력 9
No

예제 입력 10
123456
3
10000 5
15000 3
23456 1
예제 출력 10
No

예제 입력 11
999999
6
100000 1
200000 1
300000 1
150000 1
150000 1
100000 1
예제 출력 11
No

예제 입력 12
54321
4
10000 1
20000 1
15000 1
10000 1
예제 출력 12
No
*/

//오답
/*
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

const x = parseInt(fileData[0]);
const n = parseInt(fileData[1]);

const item = fileData[2].split(" ");
const a = Number(item[0]);
const b = Number(item[1]);
for (i = 1; i <= n; i++) {
  totalPrice = a * b;
  totalPrice += totalPrice;
}

if (x !== totalPrice) {
  console.log("Yes");
} else console.log("No");
*/

/* ai 수정 정답
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");
// console.log(fileData);

const x = parseInt(fileData[0]);
const n = parseInt(fileData[1]);

let totalPrice = 0;
for (i = 1; i <= n; i++) {
  const item = fileData[i + 1].split(" ").map(Number);
  const a = Number(item[0]);
  const b = Number(item[1]);
  totalPrice += a * b;
  // console.log(item);
}

if (x === totalPrice) {
  console.log("Yes");
} else console.log("No");
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
  const totalPrice = data[0][0];
  let sum = 0;
  for (let i = 2; i < data.length; i++) {
    const rowData = data[i];
    sum += rowData[0] * rowData[1];
  }
  console.log(totalPrice === sum ? "Yes" : "No");
}
main();
