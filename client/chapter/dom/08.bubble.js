/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log(this);
  console.log(e.currentTarget);
  // console.log('%c section', 'color:orange');
});
// e.target => 마우스가 처음 닿는 대상을 수집함
// e.currentTarget => 어디를 찍어도

// article.addEventListener('click', (e) => {
//   e.stopPropagation;
//   console.log('%c article', 'color:dodgerblue');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation;
//   console.log('%c p', 'color:hotpink');
// });

/* 캡처링 ----------------------------------------------------------------- */
