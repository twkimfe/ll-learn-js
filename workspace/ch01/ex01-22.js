/*
반복문 - break, continue
*/

// n ~ m 까지의 정수중에서 첫번째 짝수를 찾아서 출력하세요.
const n = 1;
const m = 10;

// 개인 코드 미제출
// 다른 동기생 정답
for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// n ~ m 까지 홀수를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}는 홀수입니다.`);
  }
}

// n ~ m 까지 홀수, 짝수를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}는 홀수입니다.`);
    continue;
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}
