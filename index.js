// Literal Types
var username; // username에는 "marshot"만 들어올 수 있음
// 타입을 더욱 엄격하게 검사
var introduce; // 유니온 타입도 가능
function myFunc(a) {
    // 이렇게하면 파라미터에 hello만 가능
}
function myFunc2(a) {
    // 이렇게하면 1 또는 0만 return 가능
    return 1;
}
// 숙제
function rockPaperScissors(hand) {
    return ["rock"];
}
var player = {
    name: "marshot",
};
function playerFunc(name) { }
playerFunc(player.name); // playerFunc의 파라미터에는 "marshot"이라는 '타입'('자료'가 아닌)이 들어와야 한다
// 현재 들어온 'player.name'은 type이 "marshot"이 아닌, "marshot"이라는 string이다
// 해결책
var playerObj = {
    name: "marshot",
}; // 이 Object는 literal type 지정 알아서 해줘
playerFunc(playerObj.name);
// as const
// - object value를 그대로 타입으로 지정해 준다
// - object 속성들에 모두 readonly 붙여준다
