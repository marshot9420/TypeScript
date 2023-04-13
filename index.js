// null & undefined 타입을 체크하는 경우가 많음
function myFunc(a) {
    // if 문을 하나로 줄이는 테크닉
    if (a && typeof a === "string") {
        // && 연산자의 다른 기능
        // && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
        // && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨준다
        // falsy란: false와 유사한 기능을 하는 null, undefined, NaN 값들을 의미
        // 1 && null && 3  => null이 남음
        // undefined && '안녕' && 100 => undefined가 남음
    }
}
function animals(animal) {
    // typeof 연산자는 number string boolean object 이런 식으로만 판정가능
    // 따라서 in 키워드로 object narrowing 가능
    if ("swim" in animal) {
        animal.swim;
    }
    else if ("fly" in animal) {
        animal.fly;
    }
}
// instanceof 연산자로 object narrowing 가능
var date = new Date();
if (date instanceof Date) {
    // 코드
}
function vehicle(x) {
    // 이 경우 in 키워드는 쓸 수 없다. (Car 또는 Bike에만 있는 속성이 있어야 함)
    // 또한 부모가 없기 때문에 오브젝트 instanceof 부모class 문법도 안됨
    // 비슷한 object 타입일 경우 literal type을 강제로 만들어두면 도움됨
    if (x.wheel === "4개") {
        // 코드
        console.log(x);
    }
}
// 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해 줌
