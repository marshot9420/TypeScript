var Car = /** @class */ (function () {
    function Car(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car;
}());
var car = new Car("morning");
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻 (class에 타입을 할당하고 변형시키는 키워드가 아님)
