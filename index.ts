class Person {
  name: string; // constructor()를 사용할 때는 위 필드값에 미리 있어야 this.어쩌구가 가능
  constructor(name: string) {
    // constructor() 파라미터 타입지정 가능
    this.name = name;
  }
  myFunc(age: number) {
    console.log(`Hello, My name is ${this.name}, and I'm ${age} years old`);
  }
}

let person1 = new Person("marshot");
let person2 = new Person("janghoon");

console.log(person1.name);
console.log(person1.myFunc(20));
