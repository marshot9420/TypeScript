function myFunc(x: unknown[]) {
  return x[0];
}

let a = myFunc([4, 2]); // a 타입은 무조건 unknown이다. a + 1 같은거 안됨

console.log(a);

// 해결책1: Narrowing
// 해결책2: Generic 함수 (파라미터로 타입을 입력하는 함수) 만들기

function genericFunc<MyType>(x: unknown[]) {
  // <MyType>에는 type만 입력 가능
  return x[0];
}

let b = genericFunc<number>([4, 2]);
console.log(b);

// 파라미터의 타입, return값 타입 다 가능
function exFunc<ExType>(x: ExType[]): ExType {
  return x[0];
}

// Generic 함수 장점:
// 확장성이 조금 있어보임
// 매번 다른 타입 출력가능
let c = exFunc<number>([4, 2]);
let d = exFunc<string>(["4", "2"]);
console.log(c);
console.log(d);
// 타입파라미터 가끔 자동으로 유추함

// 아직 x의 타입이 불확실하므로 (아래에서 number라고 선언하기 때문에) 에러가 발생
function addOne<addType>(x: addType) {
  return x + 1;
}

let e = addOne<number>(100);
console.log(e);

// 해결법: 타입파라미터를 제한해 둔다 (number 말고 커스텀 타입으로도 제한 가능)
function minusOne<minusType extends number>(x: minusType) {
  return x - 1;
}

let f = minusOne<number>(100);
