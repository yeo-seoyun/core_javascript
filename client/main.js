/* global gsap*/

import {
  tiger,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

// xhr 작동 확인 ->
// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//   res.forEach((item) => {
//     insertLast(document.body, `<div>${item.name}</div>`);
//   });
// });

// [phase-1]

// 1. user 데이터를 fetch 해주세요.
// 2. 함수안에 넣기
// 3. user 데이터 랜더링

// 범쌤의 답안 코드 ㅎ
const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  // 로딩스피너 불러오기
  renderSpinner(userCardInner);

  try {
    // 코드의 실행 흐름 제어
    await delayP(100);

    // 로딩완료 후 스피너 지우기
    // $('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await tiger.get(END_POINT);
    const userData = response.data;

    userData.forEach((data) => renderUserCard(userCardInner, data));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacuty: 0,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  const id = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

// create창

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  tiger.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
