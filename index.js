function skills() {
  this.q = "strike";
  this.w = "snowball";
}

var nunu = new skills();

console.log(nunu.name);
// name이 없으면 부모에게 물어본다 (prototype chain)
// 여기서는 없으니 결과는 undefined

skills.prototype.name = "kim";

console.log(nunu.name);
