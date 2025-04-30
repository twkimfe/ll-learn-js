/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 초기화
console.log(count);

count = count + 1;
count += 1;
count++;

console.log(count);

var start = 0;
console.log(count);
count = count + 1;
count += 1;
count++;

console.log(count);
console.log(count++);
console.log(++count);

/*
코드를 실행하지 말고 x, y 값을 계산하세요.
전위형은 변수 앞에 증감 연산자가 위치하고 후위형은 변수 뒤에 증감 연산자가 위치합니다.
전위형은 연산 전에 값을 증감시키고 후위형은 연산 후에 값을 증감시킵니다.
후위형이라고 하더라도 같은 수식 내에서 여러번 사용되면 다음 연산에 증감치가 반영됩니다.
*/

var x = 5;
var y = x++ + ++x + x++ - x--;
console.log(x, y); // 7 11 반환
