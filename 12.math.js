// Math 클래스
console.log(Math.abs(-10));
console.log(Math.ceil(1.4));
console.log(Math.floor(1.4));
console.log(Math.round(1.49));
console.log(Math.round(1.5));
console.log(Math.trunc(1.565465));
console.log(Math.random() * 10);
// Math.random() : 0-1 사이의 실수 랜덤으로 반환
console.log(Math.floor(Math.random() * 10) + 1);
const num = Math.random() * 10;
const result = Math.floor(num) + 1;
console.log(result);

// 퀴즈 - 로또 발생기
// 1-46 중에 여섯개 숫자 고르기
let cnt = 0;
let set = new Set();
do{
    let num = Math.floor(Math.random() * 45) + 1;
    // if(set.has(num)){
    //     continue;
    // } set이라 필요 없는 코드
    set.add(num);
    cnt++;

}while(cnt < 6);
console.log(set);