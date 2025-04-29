// echo 함수 - 일반 함수

(() => {
  // FIXME string 타입 매개변수를 받고 string 타입을 리턴하는 함수의 타입 지정
  function echoString<T>(msg: T): T {
    return msg;
  }
  // FIXME number 타입 매개변수를 받고 number 타입을 리턴하는 함수의 타입 지정
  function echoNumber<T>(msg: T): T {
    return msg;
  }
  // FIXMEboolean 타입 매개변수를 받고 boolean 타입을 리턴하는 함수의 타입 지정
  function echoBoolean<T>(msg: T): T {
    return msg;
  }

  console.log(echoString<string>("hello"));
  console.log(echoNumber<number>(100));
  console.log(echoBoolean<boolean>(true));
})();
