const arr = [1,2,3,4];
const newArr = arr.map((elm) => {
    return elm * 2;
});

console.log(newArr);

/*map 내장 함수는 배열의 각각 모든 요소에 한번씩 콜백 함수를 수행함
map이라는 배열의 내장함수는 원본배열의  모든 요소를 순회하면서 어떤 연산을 하여 
리턴된 값들을 순서대로 합쳐서 새로운 배열을 리턴하는 함수 */

