// implements 키워드
// interface는 object 타입지정할 때 씀
// class 타입을 확인하고 싶을 때도 interface 문법 사용 가능 (implements 키워드도 필요)
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let car = new Car("morning");
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻 (class에 타입을 할당하고 변형시키는 키워드가 아님)
