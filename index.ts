let username: string = "marshot";
let age: number = 28;
let handsome: boolean = true;
let nothing: null = null;
let notYet: undefined = undefined;
let list: [] = [];
let users: string[] = ["marshot", "choi", "yuri"];
let ages: number[] = [1, 2, 3, 4, 5];
let obj: {} = {};
let dontKnow: { name?: string } = { name: "marshot" };
let player: string | number = 123;
player = "marshot";

type MyType = string | number;

let hero: MyType = 123;
hero = "marshot";

function myFunc(x: number): number {
  return x * 2;
}

type Member = [number, boolean];
let john: Member = [1, true];

type Team = {
  [callsign: string]: string;
};
let jackson: Team = { callsign: "marshot" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
