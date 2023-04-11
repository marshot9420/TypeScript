// Union Type
let member: number | string = 123;
member = "marshot";

let members: (number | string)[] = [1, "2", 3];

let myObj: { a: string | number } = { a: 2 };

// any Type
let player: any;
player = 123;
player = [];

// unknown type
let username: unknown;
username = 123;
username = {};

// 아래는 안됨, any보다 안정적
let myVar: string = username;
