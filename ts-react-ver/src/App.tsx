// React + TS 쓰는 법: 변수, 함수만들 때 타입 지정
let username: string = "marshot";

let box: JSX.Element = <div></div>; // JSX 타입 지정

const App = () => {
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
