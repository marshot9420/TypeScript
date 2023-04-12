// Type Alias
type AnimalType = string | number | undefined;

let animal: AnimalType = "marshot";

type PersonType = {
  name: string;
  age: number;
};

let person: PersonType = {
  name: "marshot",
  age: 28,
};

//TypeScript에서 Object 자료 수정 하는 법
type PlayerType = {
  readonly name: string; // 이 Object 자료는 읽기만 가능(readonly), 수정 불가
};

const player: PlayerType = {
  name: "marshot",
};

type UserType = {
  name?: string; // string | undefined
};

const username: UserType = {
  name: "marshot",
};

// 이런것도 가능
type Name = string;
type Age = number;
type Hero = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewPositionType = PositionX & PositionY; // {x: number, y: number}, & 연산자로 Object 타입을 extend 한다

let position: NewPositionType = { x: 10, y: 20 };

// Type 변수 지정할 때의 주의점
// 같은 이름의 type 변수 재정의 불가능
