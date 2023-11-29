/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까?';
  },
};

// 객체에서 내가 원하는 값이 있어?
// in 문  'creator' in javaScript

Object.prototype.nickName = 'tiger';

// const key = 'toString';

// console.log(key in javaScript);

// 자바스크립트는 자유로운 언어이기 때문에 내가 마음대로 바꿀 수 있음.

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성을(property) 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

const key = 'createAt';

// console.log(javaScript.hasOwnProperty(key));
// javaScript 객체가 오염 된 상태

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// call = 빌려쓰는 메세드
// console.log({{}}.hasOwnProperty.call(javaScript, key));

/* ------------------------------------------------ */
// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  // console.log(key);
}

// for..in 객체를 순환하는 용도로 사용해주세요.
// 배열은 순서 보장이 안 됨, 성능 나쁨 => for..in 은 객체에 양보하세요.

// 객체 ... ?어쩌구~

const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true,
  },
});
