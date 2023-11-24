/* ------------------ */
/* Variables          */
/* ------------------ */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// is, has =>블린 값 관례
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */
let CalcProductPriceByQuantity;
let totalProductPrice;
let isPayment = true;
let hasCartList = false;
let paymentList;
let fortuneOfToday = 'good';

/* constant variables -------------------------------------------------- */
const DAY_PER_YEAR = 365;
const BRAND_PREFIX = 'NIKE';
const productInfotmation = '';

/* -------------------------------------------------- */
let admin;
let name;

name = 'jhon';
admin = name;

// console.log(admin);

const ourPlanetNave = 'Earth';
// console.log(ourPlanetNave);

/* -------------------------------------------------- */

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 응답 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';
