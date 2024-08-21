// Array 선언과 초기화
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]) // index는 0부터 시작

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

let array = new Array(2); // size
console.log(array); // [ <2 empty items> ]
array = new Array(1,2,3,4,5); // [ 1, 2, 3, 4, 5 ]
console.log(array);

// item 수정, 추가, 삭제
numbers[3] = -4; // 값 변경
numbers[5] = 6; // 인덱스에 값이 없었는데 추가됨
console.log(numbers);

delete numbers[1];
console.log(numbers); // 인덱스 1인 자리에 비어있음 [ 1, <1 empty item>, 3, -4, 5, 6 ]

// Array 활용
let bts1 = ['진', '슈가', '제이홉', 'RM']; // literal : 값 자체를 줌
console.log(bts1);
let bts2 = new Array('지민', '뷔', '정국'); // rest parameter : 크기 지정 안함
console.log(bts2);

console.log(bts1.indexOf('슈가'));
console.log(bts1.includes('RM'));
console.log(bts1.includes('지민'));

// 추가
bts1.push('차은우'); // append
console.log(bts1);
console.log(bts1.length);

bts1.unshift('이도현'); // 맨 앞에 추가
console.log(bts1);

// 삭제
 let first = bts1.shift(); // 첫번째 아이템 삭제
 console.log(bts1);
 console.log(first); // 삭제하면서 반환해줌

 let last = bts1.pop(); // 마지막 아이템 삭제
 console.log(last); // 삭제하면서 반환해줌
 console.log(bts1); 

 // 특정한 index에서 삭제 splice(index, count)
 const deleted = bts1.splice(1,1); // 인덱스 1번부터 1개의 아이템 삭제하기
 console.log(bts1);
 console.log(deleted);
 // 특정한 index에서 추가 splice(index, 0, item, item,...)
 // 두번째 파라미터는 삭제할 원소 개수 -> 특정 인덱스부터 몇개를 지우고 새로운 아이템으로 채울 것인지 
 bts1.splice(1, 0, '차은우', '이도현');
 console.log(bts1); // [ '진', '차은우', '이도현', '제이홉', 'RM' ] 
 bts1.splice(1,2,'오상욱', '손흥민');
 console.log(bts1); // [ '진', '오상욱', '손흥민', '제이홉', 'RM' ] 

 // 일부분으로 새로운 배열 만듦
 let bts3 = bts1.slice(0, 2); // 0번 인덱스부터 2개 아이템 복사하기
 console.log(bts3);
 console.log(bts1);

 bts3 = bts1.slice(3, -1); // 뒤에서부터 1개 복사 ??
 console.log(bts3);
 bts3 = bts1.slice(-3);
 console.log(bts3);

 // 배열 합치기
 const bts = bts1.concat(bts2);
 console.log(bts);

 // 역순 배열
 const rbts = bts.reverse();
 console.log(rbts);

// 배열을 문자열로 합하기
let members = bts.join(', ');
console.log(members);
console.log(typeof(members)); // string

// 퀴즈 
// list array의 item 중에 bts 멤버만 골라 배열을 만들고 하나의 문자열로 만들어서 출력하기
const list = ['슈가', '차은우', '박서준', '이도현', '제이홉', '주우재', '지민'];
const bts4 = ['진', '슈가', '제이홉', 'RM', '지민', '뷔', '정국'];
let array_bts = []; // let array_bts = new Array();
for(let i = 0; i < list.length; i++){
    if(bts4.includes(list[i])){
        array_bts.push(list[i]);
    }
}
let str_bts = array_bts.join(', ');
console.log(str_bts);