//함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
//함수 호출 후
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
        console.log(obj[key]);
    }
}
