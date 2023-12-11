/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// console.log(Array.isArray([]));

// isArray([]); // true | false

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

/*
1- 줄이기

const isArray = (data)=>{
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function normalIsArray(data){
  // return Array.isArray(data)
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
*/

/*
2- 줄이기
const isArray = data => Array.isArray(data)
const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'



function normalIsArray(data){
  // return Array.isArray(data)
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
*/

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집 사장',
    age: 52,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '모델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

/* 요소 순환 ---------------------------- */

// forEach => 반환값이 없음
// [10, 100, 1000, 10_000]
arr.forEach((item, index) => {
  console.log(item);
});

// people.forEach(item => item.job);
people.forEach((item) => {
  item.job;
});

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverseArray = arr.reverse();
// const reverseArray = arr.toReversed(); // 원형 파괴 2023

console.log(reverseArray);

// splice
// console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));
console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));

// sort
// const a = arr.sort((a, b) => {
//   return b - a;
// });

const a = arr.toSorted((a, b) => {
  return b - a; // b - a;
});
console.log(a);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

//
const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

const newAge = people.map((item) => item.age - 2);

console.log(newAge);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 첫번째로 찾은 대상만 반환함

// 이름이 송현규인 사람을 찾아서 return하기
const findUser = people.find((item) => {
  // return item.name === '송현규';
  return item.age < 30;
});

console.log(findUser);

// findIndex -> 순서를 찾아줌

/* 요소 걸러내기 --------------------------- */

// filter

const 젊은이들 = people.filter((item) => {
  return item.age < 30;
});

console.log(젊은이들);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '종영 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
