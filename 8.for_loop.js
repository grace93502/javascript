// for 구문
for(let i = 0; i < 5; i++){
    console.log(i);
}
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        console.log(i, j);
    }
}

// 퀴즈 - 구구단 출력
// 구구단을 이중 for루프를 이용해서 출력하시오
for(let i = 2; i < 10; i++){
    console.log(`==${i}단==`)
    for(let j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log()
}