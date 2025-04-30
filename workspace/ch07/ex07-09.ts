// 내장 객체 - Date

(() => {
  // 오늘 날짜
  const today = new Date();
  console.log(today);

  console.log(today.getFullYear());
  console.log(today.getMonth());
  console.log(today.getDate());
  console.log(today.getDay());
  console.log(today.getHours());
  console.log(today.getMinutes());
  console.log(today.getSeconds());

  console.log(today.getTime());
})();
