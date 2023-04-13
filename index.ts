class User {
  x = 10;
} // class를 복사하고 싶을 때

class NewUser extends User {}

let user = new NewUser();
console.log(user);

class Player {
  protected x: number = 10; // private와 마찬가지로 class {} 안에서만 사용가능 다만, protected는 좀 더 확장성이 있다.
}

class NewPlayer extends Player {
  doThis() {
    this.x = 20; // protected는 현재 class {} 안에서 + extends 된 class{} 안에서 사용가능 (자식은 X)
  }
}

// protected: extends된 class는 사용가능, 자식들은 사용불가능
// private: extends된 class는 사용불가능, 자식들은 사용불가능

class Person {
  static x = 10; // static 키워드 붙이면 부모 class에 직접 부여된다. (+ 자식에게 안물려줌)
  y = 20; // extends 쓰면 잘 따라옴
}

let person = new Person();
console.log(Person.x);

class Animal {
  private static x = 10; // private / protected / public + static 가능
  y = 20;
}

let animal = new Animal();

// 응용
class Human {
  static skill = "JS";
  intro = `${Human.skill} 전문가`;
}

let marshot = new Human();
console.log(marshot);

Human.skill = "TS";

marshot = new Human();

console.log(marshot);
