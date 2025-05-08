// 비동기 함수 - async 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용

(() => {
  function p1() {
    // Promise
    return new Promise((resolve, reject) => {
      resolve("p1 결과");
    });
  }
  async function a1() {
    // 비동기 함수지만 동기 함수처럼 개발 가능
    return "a1 결과";
  }

  function p2() {
    return new Promise((resolve, reject) => {
      resolve("p2 결과");
    });
  }
  async function a2() {
    throw "a2 에러";
  }

  function test() {}

  console.log("1. 작업 시작.");
  test();
  console.log(
    "2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미"
  );
})();
