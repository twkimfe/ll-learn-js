/*
반복문 - for문
for문으로 구구단 생성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

let dan = 3;
for (let i = 1; i <= 9; i++) {
  let sum = dan * i;
  // console.log(dan + ' x ' + i + ' = ' + sum);
  console.log(`${dan} x ${i} = ${sum}`);
}

/* 
2단 부터 9단까지 출력

출력 예시:
2 x 1 = 2
2 x 2 = 4
...
2 x 9 = 18

3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27

...

9 x 1 = 9
9 x 2 = 18
...
9 x 9 = 81
*/

for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    let sum = dan * i;
    console.log(`${dan} x ${i} = ${sum}`);
  }
  console.log(" ");
}

/*
2단부터 9단까지 출력
출력 예시
2*1=2 3*1=3 ...
2*2=4 3*2=6 ...
...
2*9=18 3*9=27 ...
*/
// 구현 예시, 추가로 구현 필요
for (let dan = 2; dan <= 9; dan++) {
  let gugu = "";
  for (let i = 1; i <= 9; i++) {
    let sum = i * dan;
    gugu += `${dan} x ${i} = ${sum}`.padEnd(12);
  }
  console.log(gugu);
}
console.log(' ');

// 구현 코드
for (let i = 1; i <= 9; i++) {
  let gugu = "";
  for (let dan = 2; dan <= 9; dan++) {
    let sum = i * dan;
    gugu += `${dan} x ${i} = ${sum}`.padEnd(12);
  }
  console.log(gugu);
}
