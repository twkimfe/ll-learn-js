/*
제목: 문자열 반복
설명: 각 문자를 반복하여 출력하는 문제
제출: https://www.acmicpc.net/submit/2675

문제
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

입력
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. 
S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 

출력
각 테스트 케이스에 대해 P를 출력한다.

예제 입력 1
2
3 ABC
5 /HTP

예제 출력 1
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

//caseNum 토대로 문자열 출력
const caseNum = inputData[0];
for (let i = 1; i <= caseNum; i++) {
  const wordString = inputData[i];
  const wordArray = wordString.split("").filter((char) => char !== " ");
  //console.log(wordArray);

  //문자열 중, 반복 횟수/문자열 구분, 처리 후 출력
  const R = wordArray[0];
  let newArry = "";
  for (let j = 1; j < wordArray.length; j++) {
    const result = wordArray[j].repeat(R);
    newArry += result;
  }
  console.log(newArry);
}
