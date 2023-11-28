/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
function warchingMovie() {
  let didWatchMovie = confirm('영화 봤니?');

  if (!didWatchMovie) {
    let goingToWatchMovie = confirm('영화볼거니?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑?');

      if (withWho === 'you') {
        console.log('헉!');
      } else {
        let withWho = prompt('거짓말ㅎ');
      }
    } else {
      console.log('관심 없어');
    }
  } else {
    console.log('그래..^^');
  }
}

// 영화 볼거니?
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

let movieMessage = didWatchMovie.includes('yes')
  ? '그거 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '너무 설렌다 같이 보자!'
    : '난 별로...';

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕' : '잘가'}</div>
  `;

  node.insertAdjacentHTML('beforeend', template);
}
// render(document.body,true) -> console창에 찍기
