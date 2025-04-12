/*
전역 변수와 지역 변수
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 * @returns {number} - 최대값
 */

function max(n1, n2) {
  // TODO hoisting 단원
  // var result;
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else {
    console.log("둘은 같습니다");
    return "";
  }
}

console.log(max(10, 20)); //20
console.log(max(200, 30)); //200
