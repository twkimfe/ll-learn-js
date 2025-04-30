/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

/* 수업 예제
const arr = [1, 2, 3, 4];
// 배열의 모든 요소 출력(for)
console.log("for");
for (let i = 0; i < arr.length; i++) {
  // i=0, i=1, i=2 경우에 for 문이 실행됨
  const elem = arr[i];
  console.log(i, elem);
  }
  */

// 배열 모든 요소의 합계, 홀수 값의 합계, 짝수 값의 합계를 출력
const arr = [1, 2, 3, 4];
let sum = 0;
let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < arr.length; i++) {
  // i=0, i=1, i=2 경우에 for 문이 실행됨
  const elem = arr[i];
  sum += elem;
  if (elem % 2 !== 0) {
    oddSum += elem;
  }

  if (elem % 2 === 0) {
    evenSum += elem;
  }
}
console.log("사용한 배열:" + arr);
console.log("총 합계:" + sum);
console.log("홀수값 합계:" + oddSum);
console.log("짝수값 합계:" + evenSum);

// for
for (let i = 0; i < arr.length; i++) {
  let elem = arr[i];
  console.log(elem);
}

// for of, index는 사용하지 않고, 배열 요소의 값만 추출해서 사용할 때
for (let elem of arr) {
  console.log(elem);
}

// for in
for (let prop in arr) {
  console.log(prop, arr[prop]);
}

// 동기 교육생 코드 - 이훈진
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = {
  total: 0,
  even: 0,
  odd: 0,
};

for (const index in arr) {
  const num = arr[index];
  sum.total += num;
  num % 2 === 0 ? (sum.even += num) : (sum.odd += num);
}

console.log("총합:", sum.total);
console.log("짝수 합:", sum.even);
console.log("홀수 합:", sum.odd);
*/
