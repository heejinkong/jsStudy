const arr = [
    { color: "red " },
    { color: "black" },
    { color: "blue" },
    { color: "green" },
    { color: "blue" }, 
];

let number = 3;

//find 내장함수는 element를 반환함
const element = arr.find((elm)=>{
    return elm.color === "blue";
});

console.log(element);