"use strict";
// 타입 별칭으로 객체의 타입 선언
(() => {
    const u1 = {
        name: 'haru',
        age: 5
    };
    const u2 = {
        name: 'namu',
        age: 8
    };
    console.log(u1.age, u2.name.toUpperCase());
})();
