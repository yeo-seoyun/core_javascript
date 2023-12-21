const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

/*
const tiger = async (url) => {
  const response = await fetch(url);

  console.log(await response.json());
};

tiger(END_POINT);
*/

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // console.log(url);
  // console.log(restOptions);

  const response = await fetch(url, restOptions); // option을 넣지 않으면 무조건 GET통신

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

// const user = await tiger({ url: END_POINT });

// console.log(user.data);

// console.log(await data);

// tiger({
//   url: END_POINT,
//   method: 'GET',
//   body: { name: 'tiger' },
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

// tiger.get()
// tiger.post()
// tiger.put()
// tiger.delete()

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
