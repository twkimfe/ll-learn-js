/*
제목: 팰린드롬인지 확인하기
설명: 🔄
제출: https://www.acmicpc.net/submit/10988

문제
알파벳 소문자로만 이루어진 단어가 주어진다. 
이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.
팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. 
level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.

입력
첫째 줄에 단어가 주어진다. 
단어의 길이는 1보다 크거나 같고, 100보다 작거나 같으며, 알파벳 소문자로만 이루어져 있다.

출력
첫째 줄에 팰린드롬이면 1, 아니면 0을 출력한다.

예제 입력 1
level
예제 출력 1
1

예제 입력 2
baekjoon
예제 출력 2
0
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();
// console.log(inputData);

//TODO 방법1: for문으로 직접 비교
// ai 수정 코드
/*
let isPalindrome = true
  for (let i = 0; i <(inputData.length / 2); i++) {
    if ( inputData[i] !== inputData[inputData.length - 1 - i]) {
      isPalindrome = false;
      break
    } 
}
console.log(isPalindrome ? 1 : 0);
*/
// 개인코드, 거의 맞음
//   for (let i = 0; i <(inputData.length / 2); i++) {
//     if ( inputData[i] !== inputData[inputData.length - 1 - i]) {
//       return console.log(0);
//     } 
// }
// console.log(1);

//TODO 방법2: 문자열 뒤집기 메서드 활용
// split('').reverse().join('')
const reverseWord = inputData.split('').reverse().join('')
// console.log(reverseWord);
const isPalindrome = inputData === reverseWord;
console.log(isPalindrome ? 1 : 0);
