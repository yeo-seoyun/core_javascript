/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  total: 0,
  date: '2023. 12. 06',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '육개장', price: 8000, count: 3 },
  ],

  totalPrice() {
    this.menu.forEach((item) => {
      this.total += this.menu.price * this.menu.count;
    });

    return this.total;

    //-> this.menu.forEach(item=> this.total += item.price * item.count)

    // this.menu.reduce((acc, cur) => {
    //   console.log(cur.price * cur.count);
    // }, 0);

    // this.total = this.menu.reduce(
    //   (total, product) => total + product.price * product.count,
    //   0
    // );
  },
};

const totalPrice = shopOrder.totalPrice();

console.log(totalPrice);

// console.log( shopOrder.menu[0].price * shopOrder.menu[0].count + shopOrder.menu[1].price * shopOrder.menu[1].count );

// 반복문 forEach

let total = 0;

shopOrder.menu.forEach((item) => {
  total += item.price * item.count;
});

// Array.reduce

const result = shopOrder.menu.reduce(
  (acc, cur) => acc + cur.price * cur.count,
  0
);

// console.log(result);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
  },
};

navigationMenu.addItem({
  id: 'link-l',
  text: 'lycos',
  link: 'http://lycos.co.kr',
});

/* 🎯 info 과제 예문 풀이 - 메서드와 this 🎯 */

// (2)

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* 🎯 info 과제 예문 풀이 - new 연산자와 생성자 함수 🎯 */

// (1)

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(new A() == new B());

// (2)

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

// (3)

// let accumulator = new Accumulator(1); // 최초값: 1

// accumulator.read(); // 사용자가 입력한 값을 더해줌
// accumulator.read(); // 사용자가 입력한 값을 더해줌

// alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함

let Accumulator = function (startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('값을 입력하세요', 0);
  };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

console.log(accumulator.value);
