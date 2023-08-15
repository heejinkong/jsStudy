const arr = [
    { num:1 , color: "red " },
    { num:2 , color: "black" },
    { num:3 , color: "blue" },
    { num:4 , color: "green" },
    { num:5 , color: "blue" }, 
];

// filter 내장함수는 전달한 콜백함수가 true를 반환하는 모든요소를 배열로 반환하는 친구
console.log(arr.filter((elm)=> elm.color === "blue"));