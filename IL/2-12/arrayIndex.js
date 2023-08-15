const arr = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" }
];

let number = 3;

//findIndex 내장함수를 이용하면 콜백함수를 전달해서 해당 콜백함수가 true를 반환하는 첫번째요소를 반환하는 로직 작성 가능
console.log(arr.findIndex((elm)=>elm.color === "red"));