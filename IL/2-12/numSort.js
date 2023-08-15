let numbers = [0, 1, 3, 2, 10, 30, 20];

const compare = (a,b) => {
    // 1. 같다
    // 2. 크다
    // 3. 작다

    if(a > b) {
        //크다
        return 1;
    }
    if(a < b) {
        //작다
        return -1;
    }

    //같다
    return 0;
};

numbers.sort(compare);

console.log(numbers);