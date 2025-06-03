/*
제목: 숫자의 합
설명: 정수를 문자열로 입력받는 문제. Python처럼 정수 크기에 제한이 없다면 상관 없으나, 예제 3은 일반적인 정수 자료형에 담기에 너무 크다는 점에 주목합시다.
제출: https://www.acmicpc.net/submit/11720

문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.

예제 입력 1
1
1
예제 출력 1
1

예제 입력 2
5
54321
예제 출력 2
15

예제 입력 3
25
7000000000000000000000000
예제 출력 3
7

예제 입력 4
11
10987654321
예제 출력 4
46
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

//ai 수정
//inputData를 문자열로 호출, 호출 문자열의 각 자리 숫자를 배열로 변환
const numString = inputData[1];
const numArray = numString.split("").map(Number);
//reduce로 sum값 합산 제출
const sum = numArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//개인 코드, 오류
// console.log(inputData);
// const numList = [inputData[1]];
// const sum = numList.reduce()