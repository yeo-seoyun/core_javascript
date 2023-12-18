/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('nav');

function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return;

  // if (target.className === 'home') {
  //   target.style.background = 'orange';
  // }

  let dataName = attr(li, 'data-name');
  // if (li.dataset.name === 'contact') {
  //   li.style.background = 'dodgerblue';
  // }

  if (dataName === 'about') li.style.background = 'hotpink';
  if (dataName === 'home') li.style.background = 'greenlime';
  if (dataName === 'contact') li.style.background = 'dodgerblue';
}

nav.addEventListener('click', handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */