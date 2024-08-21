// 다중 선택문 (switch case)
let browser1 = 'Chrome';
let browserName1;

switch(browser1){
    case 'IE':
        browserName1 = '인터넷 익스플로러'; break; // break 필수
    case 'FF':
        browserName1 = '파이어 폭스'; break;
    case 'Chrome':
        browserName1 = '크롬'; break;
    case 'Opera':
        browserName1 = '오페라'; break;
    case 'Safari':
        browserName1 = '사파리'; break;
    default:
        browserName1 = '알려지지 않은 브라우저';
}
console.log(`브라우저명은 ${browserName1}`);


// 퀴즈 - 학점 구하기
const score1 = 89;
let grade1;

switch(true){
    case score1 >= 90:
        grade1 = 'A'; break;
    case score1 >= 80:
        grade1 = 'B'; break;
    case score1 >= 70:
        grade1 = 'C'; break;
    case scpre1 >= 60:
        grade1 = 'D'; break;
    default:
        grade1 = 'F';
}
console.log(`당신의 학점은 ${grade1}입니다.`);