let user1 = { //객체
    name: "john", // 키:"name", 값: "john"
    age: 30 // 키: "age", 값: 30
}
console.log(user1.name);

const user2 = {
    name: "John"
};
user2.name = "Pete";

console.log(user2.name);

let user3 = {};

//set
user3 ["likes birds"] = true;

//get
console.log(user3["likes birds"]);

//delete
delete user3["likes birds"];

console.log(user3["likes birds"]);