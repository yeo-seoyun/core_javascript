/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let age = 90;

if (age >= 14 && age <= 90) {
  console.log('청소년 또는 성인입니다.');
}

// ------------------------------------ //

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// logical AND Assignment 논리곱 할당 연산자
// a = a && b 기존 방식
// a &&= b; 새로운 방식

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical OR Assignment 논리합 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

// --------------------------------------------- //

function login() {
  let userName = prompt('이름을 입력하세요');

  if (!userName) return;

  // 취소, ESC 버튼을 누르면 null이 뜸...
  // 어떤 값도 입력하지 않았을 경우 => 빈문자 '' 와 같음

  // userName?.toLowerCase() => 대소문자 구분 없애주기 / ?=>옵셔널체이닝
  if (userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력하세요');

    if (password?.toLowerCase() === 'TheMaster') {
      alert('환영합니다!');
    } else {
      alert('인증에 실패하였습니다.');
    }
  } else if (
    userName === null ||
    userName === '' ||
    userName.replace(/\s*/g, '')
  ) {
    alert('취소 되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
}

login();

// } else if (userName === null) {
//   alert('취소 되었습니다.');
// } else if (userName === '') {
//   alert('취소 되었습니다.');
// } else {
//   alert('인증에 실패하였습니다.');
// }

// userName.replace(/\s*/g, '') -> 정규 표현식 (whithspace 처리)
