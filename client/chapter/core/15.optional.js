/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
if ('photos' in portableFan) {
  if ('animate' in portableFan.photos) {
    console.log(portableFan.photos.animate);
  }
}

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

/* ------------------------------------------------ */

setTimeout(function () {
  const template = /* html */ `
    <button type="button">clickMe</button>
  `;

  document.body.insertAdjacentHTML('beforeend', template);
}, 3000);

let count = 0;
const id = setInterval(() => {
  // setInterval을 실행시 자동으로 id가 부여됨

  document.querySelector('.first').style.transform =
    `translateY(${++count}px) rotate(${++count}deg)`;

  if (count >= 250) {
    clearInterval(id);
  }
}, 10);

/*

// requestAnimationFrame : 함수를 일정 프레임마다 실행시키는 함수

let count = 0;

function animation() {
  console.log(++count);

  const id = requestAnimationFrame(animation);

  if (count >= 100) {
    cancelAnimationFrame(id);
  }
}

animation();
*/
