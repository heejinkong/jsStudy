function getPow(x,n) {
    if(n>1) {
        let total = x;
        for (let i = 1; i < n; i++) {
            total*= x;
        }
        console.log(total);
    } 
    else{
        console.log("자연수를 입력하세요")
    }
     
}
getPow (3,2);



