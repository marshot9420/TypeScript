// Union Type
var member = 123;
member = "marshot";
var members = [1, "2", 3];
var myObj = { a: 2 };
// any Type
var player;
player = 123;
player = [];
// unknown type
var username;
username = 123;
username = {};
// 아래는 안됨, any보다 안정적
var myVar = username;
