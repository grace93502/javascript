// while 구문
let age = 0;

while(age < 5){
    console.log(`${age}살입니다.`);
    age += 1;
}

// 중첩 while
let age1 = 0;
let num1 = 0;
while(age1 < 5){
    while(num1 < 10){
        console.log(`${age1}살입니다.`);
        num1 += 1;
    }
    num1 = 0; // 초기화 필수
    age1 += 1;
}

// do-while 구문
let num2 = 0;
do{
    num2 = num2 + 1;
    console.log(num2);
}while(num2 < 10);

// break, continue
for(let i = 0; i < 10; i++){
    if(i == 2) break;
    console.log(`${i} was executed!`);
}

for(let i = 0; i < 10; i++){
    if(i == 2) continue;
    console.log(`${i} was executed!`);
}