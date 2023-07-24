function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("John", 30);
console.log(user.name);
console.log(user.age);

let user1 = { name: "John", age: 30};

console.log( "age" in user1 );
console.log( "blabla" in user1);


let user2 = {
    name: "peter",
    age: 30,
    isAdmin: true
};

for (let key in user2) {
    // 키
    console.log(key);

    //키에 해당하는 값
    console.log(user2[key]);
}