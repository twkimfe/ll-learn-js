// 유니언 타입(union type)

(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString("hello");
  logNumber(123);

  function log(msg: string | number | boolean): void { 
    console.log(msg);
  }

  log("hello");
  log(123);
  log(true);
})();
