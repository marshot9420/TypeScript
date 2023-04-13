// Object 타입 지정할 땐 interface 사용 가능
interface squareType {
  color: string;
  width: number;
}

let square = {
  color: "red",
  width: 100,
};

// 퀴즈
interface Student {
  name: string;
}
// interface 장점: extends로 복사 가능
interface Teacher extends Student {
  age: number;
}

let student: Student = {
  name: "marshot",
};

let teacher: Teacher = {
  name: "marshot",
  age: 20,
};

console.log(student);
console.log(teacher);

// Type Alias도 유사한 기능이 있다
type AnimalType = { name: string };
type CatType = { age: number } & AnimalType; // 전문용어로 intersection type

// interface의 extends와 다른점:
// extends: 복사해주세요
// &: 교차(intersection)되는 타입 즉, 두 타입을 전부 만족하는 타입을 만들어 달라는 뜻

// type vs interface
// interface는 중복 선언이 가능
// ex)
interface Player {
  name: string;
}
interface Player {
  age: number;
}
// 위에 Player가 선언되어 있어도 아래 같은 변수명으로 작성 가능 (합쳐짐)

// type은 중복선언 불가능

// interface의 장점
// 외부 라이브러리같은 경우 interface를 많이 쓴다 (중복 가능)
// 그럼 추후에 타입에 뭔갈 더하는 것이 쉽다

// extends 쓸 때 중복 속성이 발생하면 => 에러로 잡아준다
// &를 쓸 때 중복 속성이 발생하면 => 에러가 안난다
// ex)
type User = { name: string };
type Marshot = { name: number } & User;
let user: Marshot = { name: "marshot" }; // type이 'never'가 된다 (string과 number 둘 다 만족해야함)
