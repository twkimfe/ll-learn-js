(() => {
  console.log("start");
  // 주요 내장 함수 - clearTimeout
  // 타이머 id를 지정한 코드
  let timerId = setTimeout(() => {
    console.log("2초 후 실행");
  }, 1000 * 2); //2초 후 실행
  // timerId = 10;
  console.log("timerId:", timerId);
  clearTimeout(timerId);

  // 주요 내장 함수 - setInterval, clearInterval
  const timerId2 = setInterval(() => {
    console.log("2초 간격으로 실행");
  }, 1000 * 2); //3초 간격

  clearInterval(timerId2);
  console.log("end");
})();
