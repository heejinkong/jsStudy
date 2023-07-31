let arr = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체함
arr.splice(0, 3, "Let's", "dance");

console.log(arr);

//처음 두 개의 요소를 삭제함
let removed = arr.splice(0, 2);
console.log(removed);