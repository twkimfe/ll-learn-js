/*
기본 데이터 타입 - BigInt
*/

var maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대수
var maxSafeNum = Number.MAX_SAFE_INTEGER; // 안전한(정확한) 정수의 최대 값

console.log(maxNum, maxSafeNum);

console.log(
  maxSafeNum - 1,
  maxSafeNum,
  maxSafeNum + 1,
  maxSafeNum + 2,
  maxSafeNum + 3
);

//bigInt
var b1 = 12345n; // n추가 시 bigInt로 자동 선언
var b2 = BigInt(maxSafeNum);

console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
