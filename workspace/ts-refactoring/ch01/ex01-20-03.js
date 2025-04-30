/*
반복문 - while문
*/
/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/
let day = 0;
let count = 1;
let sum = 0;
let price = 0;

// 개인 코드, 오답
while (count <= 10) {
  day++;
  sum++;
  count = count * 2;
  price = count * 0.036;
}

console.log(
  `${day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군, 총 ${price} 원 받았다.`
);
// 10000000개의 쌀알을 모을려면 며 칠이 필요한가?

while (count <= 10000000) {
  day++;
  sum++;
  count = count * 2;
  price = count * 0.036;
}

console.log(
  `${day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군, 총 ${price} 원 받았다.`
);

// 30일 동안 몇 개의 쌀알을 모을 수 있는가?
while (day <= 30) {
  day++;
  sum++;
  count = count * 2;
  price = count * 0.036;
}

console.log(
  `${day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군, 총 ${price} 원 받았다.`
);

// 강사 코드
day = 1;
count = 1;
sum = 0;

while (sum < 10) {
  sum += count;
  day++;
  count = count * 2;
}
console.log(
  `${--day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군.`
);

day = 1;
count = 1;
sum = 0;

while (sum < 10_000_000) {
  sum += count;
  day++;
  count = count * 2;
}
console.log(
  `${--day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군.`
);

day = 1;
count = 1;
sum = 0;

while (day <= 30) {
  sum += count;
  day++;
  count = count * 2;
}
console.log(
  `${--day}일 동안 받았더니 ${count}개 됐다. 내일은 ${
    count * 2
  }개 받을 수 있겠군.`
);
