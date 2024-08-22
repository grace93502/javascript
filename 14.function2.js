// 다양한 함수 정의 방식
// 함수 선언문
function add1(n1, n2){
    return n1 + n2;
}
console.log(add1(1, 2));

// 함수 표현식 
const add2 = function(n1, n2){
    return n1 + n2;
}
console.log(add2(1, 2));

// 화살표 함수(익명함수)
const add3 = (n1, n2) => {
    return n1 + n2;
};
console.log(add3(1, 2));

const add4 = (n1, n2) => n1 + n2
console.log(add4(3, 4));

// 퀴즈 - Callback 실습
// calc2 함수를 호출할 때 화살표 함수를 사용해서 호출하시오
function calc2(num1, num2, callback){
    return callback(num1, num2); // return 필수!!
}
console.log(calc2(1, 0, (n1, n2)=>{return n1 + n2}));
console.log(calc2(1, 2, (n1, n2)=>n1-n2)); // return 생략 가능

// 퀴즈
// 로또 발생기를 함수로 만드시오
function lotto(){
    let set = new Set();
    while(set.size < 6){
        const num = Math.floor(Math.random() * 45) + 1;
        set.add(num);
    }
    const array = Array.from(set); // set을 array로
    return array.sort((a, b)=>a-b); // 오름차순
    // 내림차순은 sort((a,b)=>b-a)
}
console.log(lotto())

// 비동기 프로그래밍
function sayHello(name){ // 함수 정의
    console.log(`Hello ${name}`);
}

function asyncTest(name, callback){
    console.log('타이머 시작');
    setTimeout(() => {
        callback(name);
    }, 1000); // 1000=1초 후에 데이터를 가져온다고 가정
}

function doOtherthing(){
    for(let i = 0; i < 1000; i++){
        console.log(`${i}번째 처리`);
    }
}
asyncTest('뷔', sayHello);
doOtherthing();