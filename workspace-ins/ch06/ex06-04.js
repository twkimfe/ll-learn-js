"use strict";
// 선택적 파라미터(optional parameter)
(() => {
    function user(name, age) {
        console.log(name, age);
    }
    user('하루', 5);
    user('용쌤');
})();
