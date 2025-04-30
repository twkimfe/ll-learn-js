"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    // T가 아닌 아무 문자를 사용할 수 있지만, 관례적으로 Type의 첫 글자인 T를 사용
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    // console.log(echo<boolean>(true)); // type 제약을 해서 타입 에러 발생
    const str = echo("hello");
    const num = echo(123.456);
    console.log(str.toUpperCase(), num.toFixed(2));
    function echo2(msg) {
        return msg;
    }
    // echo2<number>(100); // type 에러 발생
    const str2 = echo2("hello"); // 문자열의 length는 5다.
    const num2 = echo2([10, 20]);
    console.log(str2.length, num2.length);
})();
