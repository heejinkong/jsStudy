function User(name) {
    if(!new.target) { // new 없이 호출해도
        return new User(name); // new를 붙여줌
    }

    this.name = name;
}

let bora = User("보라"); // 'new User'를 쓴 것 처럼 바꿔줌
console.log(bora.name);