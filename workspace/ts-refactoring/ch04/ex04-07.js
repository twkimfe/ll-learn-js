// var alert = '출입 금지';
// console.log(alert);

// function fn() {
//   var alert = "출입 금지";
//   console.log(alert);
// }
// fn()

// 즉시 실행 함수 생성
(() => {
  var alert = "출입 금지";
  console.log(alert);
})();

// alert는 예약어가 아니다
alert("작업 완료");
