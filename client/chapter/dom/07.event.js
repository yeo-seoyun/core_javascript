/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생~~');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭했습니다.');
}

// first.addEventListener('click', handleClick);
// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mousemove', handleClick);

// first.removeEventListener('click', handleClick);

// getNode('.second').addEventListener('click', () => {
//   first.removeEventListener('click', handleClick);
// });

// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') node = getNode(node);

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const remove = bindEvent('.first', 'click', handleClick);

// getNode('.second').addEventListener('click', remove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

//

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);

  // const { offsetX: x, offsetY: y } = e;
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

ground.addEventListener('click', handleClickBall);

// 몇초에 한번씩만 호출되도록, 마우스의 움직임이 끝나면 호출되도록

ground.addEventListener('mousemove', ({ offsetX: x, offsetY: y }) => {
  // console.log(x,y);

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

  ground.insertAdjacentHTML('beforeend', template);
});

//

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 사용 예시
function search() {
  // 검색 요청 처리
}

const debouncedSearch = debounce(search, 300); // 300ms 디바운스 지연 시간

// 이벤트 리스너에 적용
// input.addEventListener('input', debouncedSearch);

// call
// apply
// bind

function func(a, b) {
  console.log('this : ', this);
  console.log('A : ', a);
  console.log('B : ', b);
}

func.call({ name: '이경화' }, 10, 100); // 실행
// func.apply({ name: '이경화' }, [10, 100]); // 실행, this를 제외한 매개변수를 배열로 적용한다
// const a = func.bind({ name: '이경화' }, [10, 100]); // 실행X, 변수에 전달하여 사용

// 항목 하나하나 전달 -> call
// 항목의 배열을 전달 -> apply

//

// 함수는 실행() 을 할 수도 있고
// 함수 본문 = another() 만 가질 수도 있다

// func.call('tiger', 1, 2);
// func.apply('tiger', [1, 2]);

// const a = func.bind('tiger',1,2) // 함수를 실행 시키지 않음.
// button.addEventListener('click',a)

// 💡 그러면 함수funcA와 함수 funcB가 있는데
// funcB.apply(funcA, args)를 실행하고 funcB함수안에서
// this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

funcB.apply(funcA, [1, 2, 3]);

//

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
