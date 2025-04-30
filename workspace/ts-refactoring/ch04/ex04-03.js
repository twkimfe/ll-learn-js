function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));

let currySum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

const currySum2 = (a) => (b) => (c) => a + b + c; // 화살표 함수로 표현, 구현 효과는 같음

console.log(currySum(10)(20)(30));