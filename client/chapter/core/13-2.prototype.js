/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 생성자 === 컴포넌트

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  // method
  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

// const animal = new Animal('포동이');

/* -------------- 값이 여러개인 경우 --------------- */
/*

class Animal {
  
  constructor(options){

    for(let [key,value] of Object.entries(options)){
      this[key] = value
    }
    // this.name = name;
    // this.stomach = [];
    // this.legs = 4;
    // this.tail = true
  }

  get eat(){
    return this.stomach
  }

  set eat(value){
    this.prey = value;
    this.stomach.push(value)
  }
}


const animal = new Animal({name:'포동이',age:15})

*/

class Tiger extends Animal {
  static options = {
    version: '1.0.1',
    ceo: 'chou',
  };

  constructor(name) {
    super(name); // 부모의 xonstructor을 가져옴
    this.pattern = '호랑이무늬';
  }

  static bark() {
    return '어흥~뿡!';
  }

  hunt(target) {
    this.prey = target;
    return `${target} 에게 조용히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger('포동이');

// class Array {

//   constructor(){

//   }

//   static isArray(){

//   }

//   forEach(){

//   }

//   reduce(){

//   }

//   map(){

//   }
