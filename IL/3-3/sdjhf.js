const getName = (person) => {
    // if(!person) {
    //     return "객체 아님"
    // }
    // return person.name;

    const name = person && person.name; // 공희진
    return name || "객체가 아닙니다.";
};

let person = { name: "공희진" };
const name = getName(person);
console.log(name);