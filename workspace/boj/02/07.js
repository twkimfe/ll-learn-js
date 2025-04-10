/*
제목: 주사위 세개
설명: 조건에 따라 상금을 계산하는 문제
제출: https://www.acmicpc.net/submit/2480

문제
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 
또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 
3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

입력
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다.

출력
첫째 줄에 게임의 상금을 출력 한다.

예제 입력 1
3 3 6
예제 출력 1
1300

예제 입력 2
2 2 2
예제 출력 2
12000

예제 입력 3
6 2 5
예제 출력 3
600
*/

/* ai 수정 코드
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

const dice1 = parseInt(fileData[0]);
const dice2 = parseInt(fileData[1]);
const dice3 = parseInt(fileData[2]);

let price = 0;
if (dice1 === dice2 && dice2 === dice3) {
  price = 10000 + dice1 * 1000;
} else if (dice1 === dice2 || dice1 === dice3) {
  price = 1000 + dice1 * 100;
} else if (dice2 === dice3) {
  price = 1000 + dice2 * 100;
} else {
  price = Math.max(dice1, dice2, dice3) * 100;
}
console.log(price);
*/

// 개인 코드, 오답
// let price = 0;
// if (dice1 === dice2 && dice2 === dice3) {
//   price = 10000 + dice1 * 1000;
//   console.log(price);
// }
// switch (dice1) {
//   case dice2:
//   case dice3:
//     price = 1000 + dice1 * 100;
//     console.log(price);
//     break;
// }
// switch (dice2) {
//   case dice1:
//   case dice3:
//     price = 1000 + dice2 * 100;
//     console.log(price);
//     break;
// }
// switch (dice3) {
//   case dice1:
//   case dice2:
//     price = 1000 + dice3 * 100;
//     console.log(price);
//     break;
// }
// if (dice1 !== dice2 && dice2 !== dice3 && dice3 !== dice1) {
//   price = Math.max(dice1, dice2, dice3) * 100;
//   console.log(price);
// }

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

  for (let row of arr) {
    // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}

function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성

  const n1 = data[0][0];
  const n2 = data[0][1];
  const n3 = data[0][2];

  let point = 0;

  if (n1 === n2 && n2 === n3) {
    point = 10000 + n1 * 1000;
  } else if (n1 === n2 || n2 === n3) {
    point = 1000 + n2 * 100;
  } else if (n1 === n3) {
    point = 1000 + n1 * 100;
  } else {
    point = Math.max(n1, n2, n3) * 100;
  }
  console.log(point);
}
main();
