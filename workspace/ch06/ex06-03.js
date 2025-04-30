"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        // return count;
        return "Count: " + count;
    }
    // let result = getCount('20');
    let result /* :string */ = getCount(20);
    console.log(result);
})();
