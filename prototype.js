function Parent(obj) {
	this.a = obj.a;
	this.b = obj.b;
}

Parent.num = 5;

Parent.prototype.getNum = function () {
	return this.a + this.b;
}

function Child(obj) {
	Parent.call(this, obj);
	this.c = obj.c;
}

function extends1(sup, sub) {
	sub.prototype = Object.create(sup.prototype);
	sub.prototype.constructor = sub;
	Object.assign(sub, sup);
}

function extends2(sup, sub) {
	function F() {}
	F.prototype = sup.prototype;
	sub.prototype = new F();
	sub.prototype.constructor = sub;
	Object.assign(sub, sup);
}

function extends3(sup, sub) {
	Object.setPrototypeOf(sub.prototype, sup.prototype);
	Object.assign(sub, sup);
}

extends3(Parent, Child);

var o = new Child({a: 1, b: 2, c: 3});
console.log(o);
