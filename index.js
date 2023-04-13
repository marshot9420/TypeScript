var Person = /** @class */ (function () {
    function Person(name) {
        // constructor() 파라미터 타입지정 가능
        this.name = name;
    }
    Person.prototype.myFunc = function (age) {
        console.log("Hello, My name is ".concat(this.name, ", and I'm ").concat(age, " years old"));
    };
    return Person;
}());
var person1 = new Person("marshot");
var person2 = new Person("janghoon");
console.log(person1.name);
console.log(person1.myFunc(20));
