// 함수(): 타입 => 해당 타입만 return
function myFunc(x) {
    return x * 2;
}
myFunc(2);
// return 막기
function anyFunc(x) {
    return x * 2;
}
anyFunc(2);
// 타입 지정된 파라미터는 필수
//옵션 파라미터
function optionalFunc(x) {
    return x + 2;
}
optionalFunc();
// 변수? :number = number | undefined
function addFunc(x) {
    console.log(x + 3);
}
// string + number (가능)
// number + number (가능)
// 이외엔 불가능
