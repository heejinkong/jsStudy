let str = `As sly as a fox, as strong as an ox`;

let target = `as`; 

let pos = 0;
while(true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log( `위치: ${foundPos}` );
    pos = foundPos + 1; 
}

let pos1 = -1;
while((pos1 = str.indexOf(target, pos + 1)) != -1) {
    console.log(`위치: ${pos}`);
}