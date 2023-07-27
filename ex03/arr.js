let arr = [`사과`, { name: `이보라` }, true, function() {console.log(`안녕하세요.`);}];

// 인덱스가 1인 요소(객체)의 name 프로퍼티 출력
console.log( arr[1].name ); //이보라

arr[3]();