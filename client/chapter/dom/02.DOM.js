/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/*
function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.');
  }
  return document.querySelector(node);
}

const first = getNode('.first'); // <span class="first">hello</span>
*/

const first = document.querySelector('.first');
const spanList = document.querySelector('span');

/* 문서 대상 확인 */
// - matches

console.log(first.matches('span')); // target에 항목(selector)이 있어?

console.log(getNode('h1').contains(getNode('.second'))); // target(부모)안에 자식 노드가 포함됐어?

// - contains
