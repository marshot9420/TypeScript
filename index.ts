// tuple type: 위치까지 고려한 타입 지정 가능
let dog: (string | boolean)[] = ["dog", true];

// ?는 맨 뒤에만 가능 (2개 이상일 경우 맨 뒤에서부터 순서대로)
let cat: [string, boolean?, number?] = ["cat", true];

// rest parameter에 활용 가능
function myFunc(...x: [number, string]) {
  console.log(x);
}

myFunc(1, "2");
// 위와 같음 다만 myFunc는(rest parameter는) []에 파라미터가 전부 담겨서 온다
function sameFunc(a: number, b: string) {
  console.log([a, b]);
}

sameFunc(111, "222");

let arr1 = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr1]; // spread operator의 타입지정도 똑같이 '...타입[]'

console.log(arr2); // [4, 5, 1, 2, 3]
