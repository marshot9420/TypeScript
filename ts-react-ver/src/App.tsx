import React, { useState } from "react";

// React + TS 쓰는 법: 변수, 함수만들 때 타입 지정
let username: string = "marshot";

let box: JSX.Element = <div></div>; // JSX 타입 지정

const App = () => {
  // useState는 자동으로 타입이 지정된다.
  let [user, setUser] = useState(["marshot"]);
  // 다만 (매우 드물지만) string + number 타입을 지정하고싶다면
  let [player, setPlayer] = useState<string | number>("marshot");

  return (
    <div>
      <h1>Hello</h1>
      <Profile player="marshot" age="20"></Profile>
    </div>
  );
};

// player 프로퍼티에 타입 지정
type ProfileProps = {
  player: string;
  age: string;
};

// Component 만들 때 타입 지정 (return 타입 지정)
const Profile = ({ player, age }: ProfileProps): JSX.Element => {
  return (
    <div>
      <h1>
        {player}입니다. 저는 {age}살 입니다
      </h1>
    </div>
  );
};

export default App;
