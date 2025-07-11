/*
제목: 그룹 단어 체커
설명: 조건에 맞는 문자열을 찾는 문제
제출: https://www.acmicpc.net/submit/1316

문제
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 단어의 개수 N이 들어온다. 
N은 100보다 작거나 같은 자연수이다. 
둘째 줄부터 N개의 줄에 단어가 들어온다. 
단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

출력
첫째 줄에 그룹 단어의 개수를 출력한다.

예제 입력 1
3
happy
new
year
예제 출력 1
3

예제 입력 2
4
aba
abab
abcabc
a
예제 출력 2
1

예제 입력 3
5
ab
aa
aca
ba
bb
예제 출력 3
4

예제 입력 4
2
yzyzy
zyzyz
예제 출력 4
0

예제 입력 5
1
z
예제 출력 5
1

예제 입력 6
9
aaa
aaazbz
babb
aazz
azbz
aabbaa
abacc
aba
zzaz
예제 출력 6
2
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n')
// console.log(inputData);

// ai 수정 코드
let count = 0;
  for (let i = 1; i <inputData.length; i++) {
  let isGroupWord = true;
  let seenChars = []; // 지금까지 본 문자 저장

    for (let j = 0; j <inputData[i].length; j++) {
      let currentChar = inputData[i][j];
      let prevChar = inputData[i][j - 1];

      // 현재 문자가 직전 문자와 다르면서, 이미 본 문자면 그룹 단어 아님
      if (currentChar !== prevChar && seenChars.includes(currentChar)) {
        isGroupWord = false;
        break;
      }

      // 현재 문자를 본 문자 목록에 추가 (중복 방지)
      if (!seenChars.includes(currentChar)) {
        seenChars.push(currentChar);
      }
    }
    if (isGroupWord) {
      count++;
    }
  }

console.log(count);

// 개인 코드, 논리 오류로 오답
/*
let result = []
let count = 0;

for (i = 1; i < inputData.length; i++) {
  let isGroupWord = true;
  result = [];
  for (let j = 0; j < inputData[i].length; j++) {
    // 그룹 단어 조건 확인
    if (j + 1 < inputData[i].length && inputData[i][j] !== inputData[i][j + 1] && !result.includes(inputData[i][j])) {
      isGroupWord = false;
      break;
    } else {
      result.push(inputData[i][j])
    }
  }
  if(isGroupWord === true) {
    count ++;
  }
}
console.log( count );
*/