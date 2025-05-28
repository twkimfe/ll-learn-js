/*
분류: 조건문
문제: 조건 문자열
url: https://school.programmers.co.kr/learn/courses/30/lessons/181934?language=javascript

문제 설명
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

두 수가 n과 m이라면
">", "=" : n >= m
"<", "=" : n <= m
">", "!" : n > m
"<", "!" : n < m

두 문자열 ineq와 eq가 주어집니다. 
ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

제한 사항
1 ≤ n, m ≤ 100

입출력 예
ineq	eq	n	m	result
"<"	"="	20	50	1
">"	"!"	41	78	0

입출력 예 설명
입출력 예 #1
20 <= 50은 참이기 때문에 1을 return합니다.

입출력 예 #2
41 > 78은 거짓이기 때문에 0을 return합니다.
*/

function solution(ineq, eq, n, m) {
  var answer = 0;

  // if(ineq === '>' && eq === '='){ // n >= m
  //   if(n >= m) answer = 1;
  // }else if(ineq === '<' && eq === '='){ // n <= m
  //   if(n <= m) answer = 1;
  // }else if(ineq === '>' && eq === '!'){ // n > m
  //   if(n > m) answer = 1;
  // }else if(ineq === '<' && eq === '!'){ // n < m
  //   if(n < m) answer = 1;
  // }

  const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };

  answer = Number(operations[ineq+eq](n, m));
  
  return answer;
}

console.log(solution("<", "=", 20, 50)); // 20 <= 50 -> true -> 1
console.log(solution(">", "!", 41, 78)); // 41 > 78 -> false -> 0