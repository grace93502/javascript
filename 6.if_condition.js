// if 조건문
// if ~ else
const adult = 19;
let age = 24;
if(age < adult){
    console.log("당신은 미성년자네요");
}
else{
    console.log("당신은 성인이네요");
}

// 중첩 if
let gender = 'male';
if(age < adult){
    if(gender != 'male'){
        console.log("당신은 미성년 여성이네요");
    }
    else{
        console.log("당신은 미성년 남성이네요");
    }
}
else{
    if(gender != 'male'){
        console.log("당신은 성인 여성이네요")
    }
    else{
        console.log("당신은 성인 남성이네요")
    }
}

// 다중선택문 (if else ~ if)
const browser = 'Chrome';
let browserName;
if (browser == 'IE'){
    browserName = '인터넷 익스플로러';
} else if (browser == 'Safari'){
    brwoserName = '사파리';
} else if (browser == 'Chrome'){
    browserName = '크롬';
} else{
    browserName = '알려지지 앟은 브라우저';
}
console.log(`브라우저명은 ${browserName}`);

// 퀴즈 - 학점 구하기
// 주어진 score에 따라서 학점(A,B,~F)을 출력하는 조건문(if~else if)문을 사용하여 작성하라
const score = 100;
let grade;
if(score >= 90) grade = 'A';
else if(score >= 80) grade = 'B';
else if(score >= 70) grade = 'C';
else if(score >= 60) grade = 'D';
else grade = 'F';
console.log(`당신의 학점은 ${grade}입니다.`);