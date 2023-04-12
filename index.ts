// Narrowing: 타입이 애매할 때 조건문을 이용해서 범위를 좁혀준다
function myFunc(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function func(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

func(123);

// Narrowing 문법 사용시 주의점
// if문 썼으면 끝까지 써야 안전
// else, else if 안쓰면 에러를 잡을 수도 없다

// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// Narrowing으로 판정해주는 문법들 => 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해준다

function something(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

something(123);

// 귀찮으면 assertion 문법 (타입 (잠깐) 덮어쓰기)
// Assertion 문법의 용도:
// 1. Narrowing 할 때, 여러개 얽힌 유니온 타입을 하나의 타입으로 확정하고 싶을 때
// 2. 무슨 타입이 들어올지 100% 확실할 때
