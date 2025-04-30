console.log("1. 프로그램 시작.");
function a(n1) {
  console.log("2. a 시작.", n1);
  const n2 = b(n1);
  console.log("3. a 종료.", n2); // 7.
}
function b(n3) {
  console.log("4. b 시작.", n3); // 3.
  const n4 = c(n3);
  console.log("5. b 종료.", n4); // 6.
  return n4;
}
function c(n5) {
  console.log("6. c 시작.", n5); // 4.
  const n6 = n5 + 10;
  console.log("7. c 종료.", n6); // 5.

  const user = JSON.parse(`{"age": ${n6}}`)
console.log(user);

  return n6;
}
// TODO 함수 단원에서 확인. 매개변수와 인자값의 개수가 달라도 에러 안남
a(10);

console.log("8. 프로그램 종료."); // 8.
