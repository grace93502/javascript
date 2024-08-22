// 함수
// 함수 정의
function sayHello(){ // 함수 정의
    console.log("Hello");
}
sayHello(); // 함수 호출

function sayHello1(name){
    console.log(`Hello ${name}`);
}
sayHello1('World!');
sayHello1(1);

// 퀴즈 - 함수 정의 실습
// 구구단의 단을 입력받아 출력하는 함수 정의
function gugudan(dan){
    for(let i = 1; i < 10; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}
gugudan(9);

// 함수 정의 - 반환값
function sayHello2(name){
    return `Hello ${name}`; // 함수가 처리한 연산의 결과값을 반환
}
let greeting = sayHello2('RM');
console.log(greeting);
console.log(sayHello2('morning'));

function add(num1, num2){
    return num1 + num2;
}
let result = add(5, 4);
console.log(result);

// 퀴즈
// score를 매개 변수로 전달받아 학점을 반환하는 함수 정의하고 여러번 호출하시오.
function get_grade(score){
    switch(true){
        case score >= 90: return 'A';
        case score >= 80: return 'B';
        case score >= 70: return 'C';
        case score >= 60: return 'D';
        default: return 'F';
    }
}
let score = 89;
let grade = get_grade(score);
console.log(`your grade is ${grade}`);

let score1 = 67;
let grade1 = get_grade(score1);
console.log(`your grade is ${grade1}`);

// Rest 매개변수
function sum(...nums){
    console.log(nums);
}
sum(1,2,3,4,5); // 내부적으로는 배열임 -> 배열 형태로 출력됨 [ 1, 2, 3, 4, 5 ]

function sum1(num1, num2, ...nums){
    console.log(num1);
    console.log(num2);
    console.log(nums);
    console.log(...nums);
}
sum1(1,2,3,4,5);

// 퀴즈 
// sum1 함수에 전달된 매개변수들의 합계를 구해서 반환하는 sum2 함수를 정의하고 여러번 호출하시오
function sum2(num1, num2, ...nums){
    let sumA = num1 + num2;
    for(let i = 0; i < nums.length; i++){
        sumA += nums[i];
    }
    return sumA;
}
console.log(sum2(1,2,3,4,5));

// 퀴즈
// 두 정수와 연산자(string형) 입력받아서 사칙연산 후 결과를 반환하는 함수를 만드시오
function calculate(num1, op, num2){
    switch(op){
        case '+' : return num1 + num2;
        case '-' : return num1 - num2;
        case '*' : return num1 * num2;
        case '/':
            if(num2 == 0){ // 피연산자가 0인 경우 나눗셈 불가
                console.log('division error');
                //return -1;
                break;
            }
            else{
                return num1 / num2;
            }
        default : // 사칙연산 외의 기호가 들어올 경우
            console.log('invalid operator');
            //return -2;
            break;
    }
}
let result2 = calculate(4, '/', 0);
console.log(result2);
result2 = calculate(2, ')', 4);
console.log(result2);

// 함수의 할당
// 함수 할당할때는 ()는 안 붙임 -> 함수 자체가 할당됨
const sayHello3 = sayHello; // 괄호 포함하면 함수 호출이지 할당이 아님
sayHello3();
sayHello();

const calc = calculate;
console.log(calc(2, '/', 3));

// 함수의 매개변수
function sayHi(name){
    console.log(`Hi ${name}`);
}
function greet(name, callback){
    // doSomething
    console.log(name);
    callback(name);
}
greet('우영우', sayHi);
greet('선생님',sayHello1);

// 퀴즈
// 사칙연산을 담당하는 각각의 함수를 정의하고 정의된 함수들을 매개변수로 전달받아서 처리하는 calc2 함수를 정의하고 호출하기
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    if(num2 == 0){
        console.log('division error');
        return -1;
    }
}
function calc2(num1, num2, callback){
    return callback(num1, num2); // return 필수!!
}
console.log(calc2(1, 2, add));
console.log(calc2(3, 1, sub));
console.log(calc2(2, 4, mul));
console.log(calc2(2, 0, div));