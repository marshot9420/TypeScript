// ...: spread operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 기능1: rest parameter (함수의 파라미터에 사용)
function myFunc() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
myFunc(1, 2, 3, 4, 5);
// 기능2: 괄호 벗겨주세요 문법
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr);
// destructuring 문법
// 1. Array의 경우
var _a = ["Hello", 100], var1 = _a[0], var2 = _a[1];
console.log(var1, var2);
// 2. Object의 경우
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age; //let { student: student, age: age } = { student: true, age: 20 };
console.log(student, age);
function print(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
var myObj = { student: true, age: 20 };
print({ student: true, age: 20 });
