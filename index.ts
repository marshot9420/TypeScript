// TypeScript의 장점: 객체지향언어같은 문법도 제공함 (public, private, protected, static)

class User {
  name: string;
  // constructor가 존재하는 이유: 파라미터 입력 가능
  constructor() {
    this.name = "marshot";
  }
}

class Player {
  public name = "marshot"; // public 키워드: 모든 자식들이 사용 가능
  constructor(a: string) {
    this.name = a;
  }
  public myFunc() {} // 함수에도 사용 가능
}

let player = new Player("jagnhoon"); // 사실 public 키워드는 자동으로 설정되어있음 (생략가능)
player.name = "MARSHOT";

class Person {
  private name = "marshot";
  constructor(a: string) {
    this.name = a;
  }
}

let person = new Person("marshot");
// person.name; => 사용불가, 클래스 내에서만 사용 가능

class Warrior {
  name: string;
  private familyName: string = "Choi"; // familyName을 변경하고 싶지 않을 때, 실수로 familyName을 변경하는 것을 방지해 준다, class 내에서 안에서만 수정, 사용가능
  constructor(a: string) {
    this.name = a + this.familyName;
  }

  familyNameChanger() {
    this.familyName = "park"; // 2. 미리 변경하도록 함수를 클래스 내부에 만들고
  }
}

let warrior = new Warrior("janghoon");
console.log(warrior);
// 1. class 밖에서 사용하려면
warrior.familyNameChanger();
console.log(warrior);

// 데이터를 외부로부터 보호하고 싶을 때 자주 사용하는 패턴이다.

class Hero {
  constructor(public name: string) {} // 기존에 name먼저 선언하고 constructor 사용이 귀찮으면 이렇게 작성 가능
}

let hero = new Hero("marshot");

console.log(hero);
