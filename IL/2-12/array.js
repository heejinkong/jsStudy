const arr = [1,2,3,4];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

//내장 함수 -> 객체 메서드처럼 사용
arr.forEach((elm) => console.log(elm));

//위와 같음 , forEach는 배열의 모든 요소를 한번씩 순회할 수 있도록 해줌
arr.forEach(function (elm) {
    console.log(elm * 2);
}); 

// arr이라는 배열에  forEach라는 메서드, 내장함수를 사용하게 되면 내장함수에 전달하는 콜백 함수를 이 배열의 각각 요소들에 대해서 실행함