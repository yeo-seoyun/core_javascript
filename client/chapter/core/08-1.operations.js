/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary;

console.log('unary : ', unary);

// 이항 연산자
let binary = Number(a) + Number(b);
console.log('binary : ', binary);

// 삼항 연산자
let ternary = a === 10 ? true : false;
console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;

// 산술 연산자: 곱셈
let multiplication = 20 * 2;

// 산술 연산자: 나눗셈
let division = 10 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log('remainder : ', remainder);

// if( a % 2 =/= 0) {
//   console.log('나 짝수야 ㅎ');
// }

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;
console.log('poser : ', power);
console.log(Math.pow(2, 53));

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3].concat([4, 5, 6]);
console.log(onlyWorkDefaultValues);

let first = [1, 2, 3];
let second = [4, 5, 6];

// spread syntax (전개연산 'concat보다 많이 쓰임')
console.log([...first, ...second]);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter = 0;

console.log(counter++);
console.log(++counter);
console.log(counter);

// 위의 코드와 아래의 코드는 같은 값을 출력함
counter = counter + 1;
counter += 1;

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;
count = count / 2; // count에 재할당됨!!
let pow = count ** 3;

total = total * count + pow;

console.log(total);
