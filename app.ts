// 로컬 모듈일 때 글로벌 변수를 만들고 싶을 때 (app.ts 참조)
let username = "marshot";
declare global {
  type Player = string;
}

export {}; // import export 있으면 자동으로 로컬 모듈임 (app.ts 참조)
