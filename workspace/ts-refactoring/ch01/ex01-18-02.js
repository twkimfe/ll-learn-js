/*
if ~ else if문
*/

// score가 90 이상 100 이하 일 때 'A' 출력
// score가 80 이상 90 이하 일 때 'B' 출력
// score가 70 이상 80 이하 일 때 'C' 출력
// score가 60 이상 70 이하 일 때 'D' 출력
// score가 60 이하 일 때 'F' 출력

const score = 70;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
