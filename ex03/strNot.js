let str = "Widget with id";

if(str.indexOf("Widget") != -1) {
    console.log("찾았다 !"); 
}

if(~str.indexOf("Widget")) {
    console.log(`찾았다 !`)
}
