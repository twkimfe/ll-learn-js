"use strict";
// 유니언 타입(union type)
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    logString("hello");
    logNumber(123);
    function log(msg) {
        console.log(msg);
    }
    log("hello");
    log(123);
    log(true);
})();
