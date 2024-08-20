// 비교연산자 
console.log(123 == 123);
console.log(123 == '123');

// === : 타입이 같으면 true, 다르면 false
console.log(123 === '123');  
console.log(123 === 123);

console.log(123 != 123);
console.log(123 != '123');

// !== : 타입이 다르면 true, 같으면 false
console.log("123 !== '123'" + 123 !== '123');
console.log(123 !== 123);

let num1 = 5
let num2 = 3
let num3 = 2
console.log(num1 > num2 &&  num2 > num3)
console.log(num1 == num2 && num1 > num2)
console.log(num1 == num2 || num1 > num2)
console.log(num1 - num2 > num2 - num3 && num2 == 0)
console.log(num1 + num2 > num3 || num3 > 0)


// 대입 연산자와 증감 연산자
let num = 0;
console.log(num);
num++;
console.log(num); // 1로 증가함
num--;
console.log(num); // 0으로 감소함

// num++ 필요한 작업 후 값을 증가(후치)
// ++num 값을 증가후 필요한 작업 수행(전치)
num = 1;
console.log(num++); // 출력후 2로 증가하므로 1 출력
num = 1;
console.log(++num); // 출력하기 전에 2로 증가하므로 2 출력

let num4 = num++; // num이 증가하기 전에 num4에 대입하므로 num4=2
console.log(num4);
console.log(num); // num2 = 3


// 삼항 조건 연산자 
// 조건 ? A : B 
const age = 15;
const result = age > 19 ? '당신을 성인입니다.' : '당신은 미성년자입니다.';
console.log(result)


// 연산자 우선순위
let a = 2;
let b = 3;
let result1 = a + (b * 4) / 5;
console.log(result1);
result1 = ((a + b) * 4 ) / 5;
console.log(result1);

result1 = a++ + b * 4;
console.log(result1);
console.log(a)