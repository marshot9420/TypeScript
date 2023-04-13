// ...: spread operator

// 기능1: rest parameter (함수의 파라미터에 사용)
function myFunc(...a: number[]) {
  console.log(a);
}

myFunc(1, 2, 3, 4, 5);

// 기능2: 괄호 벗겨주세요 문법
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr = [...arr1, ...arr2];

console.log(arr);

// destructuring 문법
// 1. Array의 경우
let [var1, var2] = ["Hello", 100];
console.log(var1, var2);
// 2. Object의 경우
let { student, age } = { student: true, age: 20 }; //let { student: student, age: age } = { student: true, age: 20 };
console.log(student, age);

// 함수 파라미터에 객체 넣기
interface MyParam {
  student: boolean;
  age: number;
}

function print({ student, age }: MyParam) {
  console.log(student, age);
}

let myObj = { student: true, age: 20 };
print({ student: true, age: 20 });
