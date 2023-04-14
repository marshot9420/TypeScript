var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// tuple type: 위치까지 고려한 타입 지정 가능
var dog = ["dog", true];
// ?는 맨 뒤에만 가능 (2개 이상일 경우 맨 뒤에서부터 순서대로)
var cat = ["cat", true];
// rest parameter에 활용 가능
function myFunc() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
myFunc(1, "2");
// 위와 같음 다만 myFunc는(rest parameter는) []에 파라미터가 전부 담겨서 온다
function sameFunc(a, b) {
    console.log([a, b]);
}
sameFunc(111, "222");
var arr1 = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr1, true); // spread operator의 타입지정도 똑같이 '...타입[]'
console.log(arr2); // [4, 5, 1, 2, 3]
