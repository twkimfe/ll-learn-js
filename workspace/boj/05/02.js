/*
제목: 단어 길이 재기
설명: 문자열을 입력받고 길이를 재는 문제
제출: https://www.acmicpc.net/submit/2743

문제
알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.

출력
첫째 줄에 입력으로 주어진 단어의 길이를 출력한다.

예제 입력 1
pulljima

예제 출력 1
8
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const word = inputData[0]

console.log(word.length);