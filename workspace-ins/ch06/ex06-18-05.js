"use strict";
// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// ex06-18-04.ts 복사
(() => {
    const cityList = [
        { value: 'Seoul', selected: false },
        { value: 'busan' },
        { value: 'GwangJu', selected: true },
    ];
    const zipcodeList = [
        { value: 12345, selected: false },
        { value: 34567, selected: true },
        { value: 56789 },
    ];
    // function createDropdownList(list: DropdownItem<string | number>[]){
    function createDropdownList(list) {
        let value;
        let options = '';
        for (let item of list) {
            value = item.value;
            options += `\t<option selected="${item.selected ? 'selected' : ''}">${typeof value === 'string' ? value.toUpperCase() : value}</option>\n`;
        }
        return `<select>\n${options}</select>`;
    }
    console.log(createDropdownList(cityList));
    console.log(createDropdownList(zipcodeList));
})();
