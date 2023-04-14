// 자바스크립트 파일을 타입스크립트 파일에서 이용하고 싶을 때
// - 일반 html css js 개발시 그냥 <script src=""></script>

// data.js의 변수
console.log(a + 1); // 당연히 에러가 나지만 브라우저 콘솔창에서는 잘 출력됨

// 변수 재정의가 가능한 declare 문법
declare let a: number;
console.log(a + 1);

// declare로 재정의한 내용은 js로 변환되지 않는다
// 특히 .js로 만든 라이브러리 사용할 때 ts에서 에러 발생

// ts파일 끼리는 그냥 import export
console.log(c);

// ts 이상한 특징: 모든 ts 파일은 ambient module이 된다 (글로벌 모듈)
// 즉, (ts에서)export한 변수, 함수 등은 모든 ts파일에서 사용 가능

// 때문에 아래와 같이 name이라는 변수명은 사용할 수 없다 이미 'lib.dom.d.ts'라는 파일에서 사용중이기 때문
let name = "marshot";

// ts파일을 ambient 모듈이 아니라 로컬 모듈로 만드는 법
// import export 있으면 자동으로 로컬 모듈임 (app.ts 참조)

// 로컬 모듈일 때 글로벌 변수를 만들고 싶을 때 (app.ts 참조)
let player: Player = "marshot";
console.log(player);
