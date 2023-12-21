import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';

/*
* callback 함수
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

delay(() => {
  console.log('실행!');

  delay(() => {
    console.log('실행!');
  });
});
*/

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');
/*
delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
      second.style.top = '0px';
    });
    second.style.transform = 'rotate(360deg)';
  });
  second.style.top = '100px';
});
*/

/* ------------------------------- promise API ------------------------------ */

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };
  // 한 번에 가져오면 에러가 날 수 있어서 이렇게(?) 불러와 사용함

  if (isNumber(options)) {
    config.timeput = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options }; // 합성
  }

  let { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(1000); // number | object

/*
function delayp(shouldReject, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve('아싸 성공ㅎㅎ');
      } else {
        reject('실패!');
      }
    }, timeout);
  });
}
*/

// 💡 promise object를 내보냄
// 💡 .then은 resolve용 .catch는 error용으로 사용

delayP(true)
  // .then은 콜백을 여러개 받을 수 있슴
  // promise객체를 반환함 = promise체이닝
  .then((res) => {
    // PromiseResult
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(delayP(false));

// ❓🤔❓
// Q. resolve(), reject() 안에 string이 아니라 다른걸 넣어도 되는건가요 ??
// A. 가능합니다!!!!

// Q. 저 프러미스 생성자함수 자체가 비동기로 실행되는 것 같은데, 맞나요??????
// A. 맞습니다!!!

/* ------------------------------ async와 await ------------------------------ */

// async - 함수가 promise 객체를 반환하도록
//       - await 사용 -> promise객체가 떨어진다면 다 사용할 수 있음

// await - 코드의 실행 흐름을 제어 (멈춤)
//       - result값 가져오기

async function delayA(data) {
  return data;
}

const value = await delayA('이슬기나');

// value.then((res) => {
//   console.log(res);
// });

// console.log(value);

// 예시
async function 라면끓이기() {
  const 물 = await delayP({ data: '물' });
  console.log(물);

  const 스프 = await delayP({ data: '스프' });
  console.log(스프);

  const 면 = await delayP({ data: '면' });
  console.log(면);

  const 그릇 = await delayP({ data: '그릇' });
  console.log(그릇);

  // delayP({data:'물'})
  // .then((res)=>{
  //   console.log( res );

  //   return delayP({data:'스프'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'면넣기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'그릇에담기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  // })

  // console.log('물넣기');
  // console.log('스프넣기');
  // console.log('면넣기');
  // console.log('그릇에담기');
}

// 라면끓이기();

//

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  console.log(data);

  insertLast(
    document.body,
    `<img src="${data.sprites['front_default']}" alt="독침붕" />`
  );

  console.log(data.sprites['front_default']);
}

// getData();

// ❓🤔❓
// Q. .then 없이도 프로미스 값을 받을수있다는거죠? A. 맞습니다!
