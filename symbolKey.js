let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, 전역심볼
console.log( Symbol.keyFor(localSymbol) ); // undefined, 전역 심볼이 아님

console.log( localSymbol.description ); // name