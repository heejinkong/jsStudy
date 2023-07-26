let str = `Widget with id`;


console.log( str.indexOf(`Widget`) ); // 0, str은 `Widget`으로 시작함
console.log( str.indexOf(`widget`) ); // -1, indexOf는 대소문자를 따지므로 원하는 문자열을 찾지 못함
console.log( str.indexOf("id") ); // 1, "id"는 첫 번째 위치에서 발견됨
console.log( str.indexOf(`id`, 2) ); // 12