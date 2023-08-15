const arr = [1,2,3,4];

let number = 3;

arr.forEach((elm) => {
    if(elm === number) {
        console.log(true);
    }
});

// includes 내장함수는 주어진 배열에서 전달받은 인자와 일치하는 값이 있는지 확인 함
console.log(arr.includes(number));

// indexof 내장함수는 주어진 배열에서 전달받은인자와 일치하는 값의 인덱스를반환하는 함수
console.log(arr.indexOf(number));
