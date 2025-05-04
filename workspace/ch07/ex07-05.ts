// 내장 객체 - JSON

(() => {
  const haru = { name: "하루", age: 5, color: "black" };
  const strHaru = JSON.stringify(haru);
  const strHaru2 = JSON.stringify(
    haru,
    (key, value) => {
      return key === "age" ? undefined : value;
    },
    2
  );
  const strHaru3 = JSON.stringify(haru, ["name", "age"]);
  const strHaru4 = JSON.stringify(haru, null, 2);

  const objHaru = JSON.parse(strHaru);

  console.log(typeof haru, haru);
  console.log(strHaru);
  console.log(strHaru2);
  console.log(strHaru3);
  console.log(strHaru4);
})();
