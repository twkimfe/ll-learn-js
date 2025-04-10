/*
2차원 배열
2차 배열로 구구단 생성qq
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
  // 입력 데이터 읽기
  const data = getData();

  // 입력 값 가져오기
  // 첫 번째 값은 row, 두 번째 값은 column
  const n1 = data[0][0];
  const n2 = data[1][0];

  // 구구단 저장하는 2차 배열 생성
  const multiTable = [];

  // n1 x n2의 구구단을 2차 배열에 저장
  for (let i = 1; i <= n1; i++) {
    const row = [];
    for (let j = 1; j <= n2; j++) {
      row.push(i * j);
    }
    multiTable.push(row);
  }

  // 구구단 출력 (i는 행, j는 열)
  for (let i = 1; i <= n1; i++) {
    let gugu = "";
    for (let j = 1; j <= n2; j++) {
      // 2차 배열 값 활용
      const result = multiTable[i - 1][j - 1];

      gugu += `${j} x ${i} = ${result}`.padEnd(15);
    }
    console.log(gugu);
  }
}
main();
