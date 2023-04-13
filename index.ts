// never type
// 함수에 never type을 쓸 수 있는 조건
// 1. return 값이 없어야 한다
// 2. endpoint가 없어야 한다 (함수가 끝나지 않아야 한다.)
// 사실 둘 다 똑같은 소리
function myFunc(): never {
  // 모든 함수는 (undefined)retrun을 하기 때문에 조건 2만 충족되면 사용 가능

  // 끝나지 않는 함수란?
  throw new Error();
}

// 끝나지 않는 함수 예시 2

function yourFunc(): never {
  while (true) {
    // 내부 코드를 무한히 반복함
  }
}

// 실제 현업에서 never 타입 쓰는 법
// - 대부분 쓸데없음: void 쓰면 됨

// 알아야하는 이유: 가끔 코드 이상하게 짜면 never type이 등장함
// ex)

// 경우1
function person(param: string) {
  if (typeof param == "string") {
    console.log(param);
  } else {
    console.log(param); // param의 타입은 무조건 string인데, else를 썼으니 이 경우 param의 타입은 never가 된다. (있을 수 없다)
  }
}

// 경우2
// 어떤 함수표현식은 return 타입이 자동으로 never가 된다
let player = function () {
  // 이 경우 player()의 타입은 자동으로 never
  throw new Error();
};
