let age = 16;

if (age < 18) {
    welcome();

    function welcome() {
        console.log("안녕");
    }
    welcome();
} else {
    function welcome() {
        console.log("하세요!");
    }
}

welcome();