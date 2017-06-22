function Parent(obj) {
	this.a = obj.a;
	this.b = obj.b;
}

Parent.prototype.getNum = function () {
	return this.a + this.b;
}

function Child(obj) {
	Parent.call(this, obj);
	this.c = obj.c;
}

Object.assign(Child.prototype, Parent.prototype);

var o = new Child({a: 1, b: 2, c: 3});
console.log(o);