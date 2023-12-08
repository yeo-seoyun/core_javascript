function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  let gravity = 10;

  return function (value) {
    gravity = value;
    console.log(gravity, water, apple);
  };
}
const ufo = earth();

// 이름은 중요하지 않음 함수에 바로 return 할 수 있음
// return tiger

// ufo(1);

// const handleClick = (() => {
//   let isClicked = false;

//   return () => {
//     if (!isClicked) {
//       document.body.style.background = 'orange';
//     } else {
//       document.body.style.background = 'white';
//     }

//     isClicked = !isClicked;
//   };
// })();

// button.addEventListener('click', handleClick);

// // const a = (b)=>(d)=>(c)=> b+d+c

// // function a(){

// //   return function(){

// //     return function(){
// //       b+d+c
// //     }
// //   }
// // }

function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent(button, 'click', handleClick);

/* * */

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(true);
