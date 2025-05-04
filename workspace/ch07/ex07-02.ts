// 주요 내장 함수 - setTimeout

(() => {
  console.log("시작");

  setTimeout(
    (a: number, b: number) => {
      console.log("3초 후에 실행 됐습니다.", a + b);
    },
    1000 * 3,
    10,
    20
  );
  /* 
- 지정된 시간이 지난 후 특정 코드를 한 번 실행하도록 예약
- 비동기적으로 호출됨, setTimeout 이후 코드가 먼저 실행
- delay값이 0이어도, 현재 실행중인 함수 코드가 먼저 실행한 다음 실행됨
- 리턴값: 예약을 중지할 때 사용하는 타이머 id(정수), 하지만 위 코드에는 따로 지정 안 함
*/

  // 타이머 id를 지정한 코드
  let timerId = setTimeout(() => {
    console.log("2초 후 실행");
  }, 1000 * 2); //2초 후 실행
  // timerId = 10;
  console.log("timerId:", timerId);
  clearTimeout(timerId);

  console.log("종료");
})();
