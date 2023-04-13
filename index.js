var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}()); // class를 복사하고 싶을 때
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(User));
var user = new NewUser();
console.log(user);
var Player = /** @class */ (function () {
    function Player() {
        this.x = 10; // private와 마찬가지로 class {} 안에서만 사용가능 다만, protected는 좀 더 확장성이 있다.
    }
    return Player;
}());
var NewPlayer = /** @class */ (function (_super) {
    __extends(NewPlayer, _super);
    function NewPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewPlayer.prototype.doThis = function () {
        this.x = 20; // protected는 현재 class {} 안에서 + extends 된 class{} 안에서 사용가능 (자식은 X)
    };
    return NewPlayer;
}(Player));
// protected: extends된 class는 사용가능, 자식들은 사용불가능
// private: extends된 class는 사용불가능, 자식들은 사용불가능
var Person = /** @class */ (function () {
    function Person() {
        this.y = 20; // extends 쓰면 잘 따라옴
    }
    Person.x = 10; // static 키워드 붙이면 부모 class에 직접 부여된다. (+ 자식에게 안물려줌)
    return Person;
}());
var person = new Person();
console.log(Person.x);
var Animal = /** @class */ (function () {
    function Animal() {
        this.y = 20;
    }
    Animal.x = 10; // private / protected / public + static 가능
    return Animal;
}());
var animal = new Animal();
// 응용
var Human = /** @class */ (function () {
    function Human() {
        this.intro = "".concat(Human.skill, " \uC804\uBB38\uAC00");
    }
    Human.skill = "JS";
    return Human;
}());
var marshot = new Human();
console.log(marshot);
Human.skill = "TS";
marshot = new Human();
console.log(marshot);
