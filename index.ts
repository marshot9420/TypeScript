// type alia에 함수 type 저장해서 쓰는 법
type MyFuncType = (a: string) => number;

// 함수 type alias 하려면 함수표현식(선언식x) 사용
const myFunc: MyFuncType = () => {
  return 10;
};

// Object 내부의 함수에 타입 지정하는 방법
type UserInfoType = {
  plusOne: MyFuncType;
};

let userInfo = {
  name: "marshot",
  plusOne: () => {
    return 1;
  },
};
