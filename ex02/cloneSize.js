let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, 같은객체

// user와 clone는 sizes를 공유
user.sizes.width++;
console.log(clone.sizes.width);