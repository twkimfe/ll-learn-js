/*
반환값이 있는 함수
*/

// 10+100 결과를 출력한다 (add)
// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
// 전달받은 두 숫자의 합계를 출력하는 함수 (sum)

add(); // 110
add(); // 110

add100(10); //110
add100(20); //120

sum(10, 20); //30
sum(30, 40); //70

// 개인 코드
/*
function add() {
  console.log(10 + 100);
}
function add100(n) {
  console.log(100 + n);
}
function sum(i, j) {
  console.log(i + j);
}
*/

// 강사 코드
function add() {
  const n1 = 10;
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

function add100(n1) {
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

function sum(n1, n2) {
  const result = n1 + n2;
  console.log(result);
}

// 전달 받은 두 숫자의 합계를 반환하는 함수 (getSum)
function getSum(n1, n2) {
  const result = n1 + n2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal); // 같은 코드
console.log(getSum(40, 50)); // 같은 코드
