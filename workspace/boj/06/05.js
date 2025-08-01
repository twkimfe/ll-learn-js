/*
제목: 단어 공부
설명: 주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
제출: https://www.acmicpc.net/submit/1157

문제
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.

입력
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 
주어지는 단어의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 
단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

예제 입력 1
Mississipi
예제 출력 1
?

예제 입력 2
zZa
예제 출력 2
Z

예제 입력 3
z
예제 출력 3
Z

예제 입력 4
baaa
예제 출력 4
A
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().toUpperCase();
// console.log(inputData);

const wordCheck = [...inputData] 
// inputData는 문자열이라서 map() 사용 불가
// console.log(wordCheck);
const frequency = {};

  for (let char of wordCheck) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1
}

const maxCount = Math.max(...Object.values(frequency));
// 객체 내부 값을 꺼내는 메서드

const maxChars = Object.keys(frequency).filter(
  key => {
    // console.log(`${key}: ${frequency[key]}`);
    return frequency[key] === maxCount
  }
)

if (maxChars.length === 1 ) {
  console.log(maxChars[0]);
} else {
  console.log('?');
}