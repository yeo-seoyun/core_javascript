/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML

// 1 - beforebegin 함수로 만들기

const h1 = getNode('h1');

const template = `<li class="list"> 영화보기 </li>`;

function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforebegin', text);
}

insertBefore('h1', template);

/*
// 2 - afterbegin 함수로 만들기

const h1 = getNode('h1');

const template = `<li class="list"> 영화보기 </li>`;

function insertFrist(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforeend', text);
}

insertFrist('h1', template);

// 3 - beforeend 함수로 만들기

const h1 = getNode('h1');

const template = `<li class="list"> 영화보기 </li>`;

function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforeend', text);
}

insertLast('h1', template);

// 4 - afterend 함수로 만들기

const h1 = getNode('h1');

const template = `<li class="list"> 영화보기 </li>`;

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterend', text);
}

insertAfter('h1', template);
*/

// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

// insertBefore();
// insertFrist();
// insertLast();
// insertAfter();