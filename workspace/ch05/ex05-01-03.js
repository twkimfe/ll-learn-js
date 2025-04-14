/*
첫번째와 마지막 구매 항목 출력(라면)
firstChild, firstElementChild, lastChild, lastElementChild: 자식요소 접근
*/

// lastElementChild를 사용하여 마지막 li 요소의 텍스트 내용 출력
console.log(
  "마지막으로 사야할 품목",
  shoppingList.lastElementChild.firstChild.nodeValue
);
