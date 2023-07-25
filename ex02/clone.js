let user = {
    name: "John",
    age: 30
};

let clone = {};

//빈 객체에 user 프로퍼티 전부를 복사해 넣습니다

for(let key in user) {
    clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 전부를 복서해 넣습니다
clone.name = "Pete"; // clone의 데이처를 변경

console.log(clone.name);