/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete -> 모든 통신이 완료

*/

// 🌟 XMLHttpRequest 🌟

/* ------------------------------ XHR callback ------------------------------ */

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  // const {method, url} = options 위에서 바로 구조분해할당이 이루어질 수 있음

  const xhr = new XMLHttpRequest();

  // GET
  xhr.open(method, url);

  // xhr.setRequestHeader(headers.key, headers.value);
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // 통신 후 바로 받을 수 없음.. 기다리는 시간이 필요 => readystate
  xhr.addEventListener('readystatechange', () => {
    // console.log(xhr.readyState);

    //xhr은 객체이므로 구조분해할당 후 변수로 지정해서 사용할 수 있음 => 객체의 구조분해할당
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response)); // JSON.parse로 해석
      } else {
        onFail({ message: '에러가 발생했습니다' });
      }
    }
  });

  // POST
  xhr.send(JSON.stringify(body)); // JSON.stringify를 사용하여 문자로 담아서 보내야함
}

// xhr({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
// });

// xhr({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
//   body: { name: 'tiger' },
// });

// 매서드의 방식을 보다 쉽고 사용하기 편리하게 만들어주기 ->

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    // key와 value의 이름이 같으면 생략가능
    url,
    onSuccess,
    onFail,
  });
};

console.dir(xhr);

// xhr.post()
xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

// xhr.put()
xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

// xhr.delete()
xhr.delete = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* -------------------------------------------------------------------------- */
/*                               XHR Promise API                              */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).fotEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   console.log(res);
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'post',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};

// xhrPromise.then()
