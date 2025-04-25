// 지정한 수가 소수인지 여부를 반환
const isPrime = function (num) {
  // num = 5
  // 캐시를 위한 코드
  // 논리 연산자 방식
  // isPrime._cache = isPrime._cache || {};
  // 처음엔 _cache 속성이 없기 때문에 값이 undefined 상태임
  // 정리한 설명 덧붙이면...
  // 만약 isPrime._cache가 undefined이면,그 자리에 빈 객체 {}를 할당해서 초기화해!

  // 조건문 방식
  if (isPrime._cache === undefined) {
    isPrime._cache = {};
  }

  if (isPrime._cache[num] !== undefined) {
    // num에 대해서 계산이 끝나고 캐시된 경우
    // 여기에 있는 ._cache[num]은 배열이 아니라 객체, 안 num은 Number 데이터 타입
    return isPrime._cache[num];
  } else {
    // 소수 판별 코드
    let prime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }

    // 캐시를 위한 코드
    isPrime._cache[num] = prime; // isPrime._cache[5] = true;

    return prime;
  }
};

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.timeEnd("소요시간");
