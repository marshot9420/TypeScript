// index signature 쓰면 object 타입지정 한번에 가능
interface UserStringOnly {
  [key: string]: string; // 모든 string으로 된 속성
}

let user: UserStringOnly = {
  name: "marshot",
  age: "20",
  location: "Gimhae",
};

interface PlayerStringOnly {
  age: number; // 이렇게 안됨 (밑에 | number 추가하면 가능), 리터럴 타입도 가능
  [key: string]: string | number;
}

let player: PlayerStringOnly = {
  name: "marshot",
  age: 28,
  location: "Gimhae",
};

// 속성 이름(key)에 숫자 가능
interface AnimalStringOnly {
  [key: number]: string; // key 값이 number일 때 string으로 타입 지정 해 주세요
} // key: number에서 number에 string 넣어도 에러 안남 (object key에 배정된 숫자는 결국 문자로 바뀌기 때문)

let animal: AnimalStringOnly = {
  0: "dog",
  1: "10",
};

// 이런 object 자료의 타입 지정
let css = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
// 사실 자동으로 14는 number로 지정되어 있음
// 혹은 같은 형태의 interface 생성

// 혹은 아래와 같이 recursive 하게 타입을 만듦
interface MyType {
  "font-size": MyType | number;
}

let scss: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 20,
    },
  },
};
