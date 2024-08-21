// Set 선언과 초기화
const set = new Set([1,2,3,4,5]); // set은 인덱스가 없으므로 이렇게만 초기화 가능
console.log(set);
// 사이즈 확인 - 배열에서의 length와 같은 기능
console.log(set.size);
// item 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);
// 존재 유무 - 배열에서의 include와 같은 기능
console.log(set.has(3));
console.log(set.has(7));

// Map 선언과 초기화
const map = new Map([['nick', '슈가'], ['group', 'bts'], ['gender', '남']]);
console.log(map);
// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('name'));
console.log(map.has('group'));
// 키에 해당하는 값 읽어오기
console.log(map.get('name'));
console.log(map.get('group'));
// 추가, 수정
map.set('nation', 'korea');
console.log(map);
map.set('group', 'bts1');
console.log(map);
// 삭제
map.delete('gender');
console.log(map);
