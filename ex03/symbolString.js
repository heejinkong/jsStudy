let user = {
    name: "John",
    money: 10000,

    // hint가 "string"인 경우
    toString() {
        return `{name: "${this.name}}"}`;
    },

    // hint가 "number"나 "default"인 경우
    valueOf() {
        return this.money;
    } 
};

let user1 = {
    name: "Pete",

    toString() {
        return this.name;
    }
};

console.log(user); // toString -> {name}
console.log(+user); // valueOf -> 1000
console.log(user + 500) // valueOf -> 1500

console.log(user1); // toString -> Pete
console.log(user1 + 500) // toString -> Pete500
