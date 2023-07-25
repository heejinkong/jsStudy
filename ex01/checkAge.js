function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('보호자');
    }
}

let age = (age > 18) ? true : false;

function checkAge(age) {
    return (age > 18) ? true : confirm("보호자");
}

let orage = (age > 18) || false;

function checkAge(age) {
    return (age > 18) || confirm("보호자");
}