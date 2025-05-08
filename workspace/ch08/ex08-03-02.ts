// 에러 핸들링 - 에러 전달(throw)
// ex08-02.ts 복사

(() => {
  function f1() {
    try {
      const fn = new Function("x", "y", "retrun x + y"); // SyntaxError 발생
      console.log(fn(10, 20));
    } catch (err) {
      // 기본적으로 catch에 전달되는 에러는 unknown 타입이 됨
      if (err instanceof Error) {
        // 타입 가드
        console.log("에러 발생.", err.message);
      }
    }
  }

  function f2() {
    f1();
  }

  f2();

  console.log("프로그램 정상 종료");
})();
