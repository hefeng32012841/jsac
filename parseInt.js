function parseNumber(num, p) {
	if ()
}

function parseStr(str, p) {
	var newStr = str.replace(/^(0x|0o)/, '');
	newStr = newStr.toUpperCase();
}

function parseObject(obj, p) {

}

function testIsNaN(val) {
	if (isNaN(val) && val !== val) {
		return true;
	}

	return false;
}

function parseInt(arg, p = 10) {
	if (arg == undefined || arg === '' || testIsNaN(arg)) {
		return NaN;
	}

	if (typeof arg === 'number') {
		return parseNumber(arg, p);
	}

	if (typeof arg === 'string') {
		return parseStr(arg, p);
	}

	if (typeof arg === 'object') {
		return parseObject(arg, p);
	}

	return NaN;
}