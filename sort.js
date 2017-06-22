function sort(arr) {
	if (!arr || !Array.isArray(arr) || arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const middleNum = arr.splice(middle, 1)[0];
	const left = [];
	const right = [];
	const len = arr.length;
	for(let i = 0; i < len; i++) {
		if (arr[i] < middleNum) {
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		}
	}

	return sort(left).concat(middleNum, sort(right));
}

function sortBubble(arr) {
	if (!arr || !Array.isArray(arr) || arr.length < 2) {
		return arr;
	}
	const len = arr.length;
	for(let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				arr[j] += arr[j + 1];
				arr[j + 1] = arr[j] - arr[j + 1];
				arr[j] -= arr[j + 1];
			}
		}
	}

	return arr;
}

function sj(n = 5) {
	for (let i = 1; i <= n; i++) {
		const lineArr = new Array(2 * n).join(' ').split('');
		lineArr.splice(n - i, 2 * i - 1, new Array(2 * i).join('*'));
		console.log(lineArr.join(''));
	}
}

function sj1(n = 5) {
	for (let i = 1; i <= n; i++) {
		const lineArr = new Array(2 * n).join(' ').split('');
		lineArr.splice(0, 2 * i - 1, new Array(2 * i).join('*'));
		console.log(lineArr.join(''));
	}
}

function sj2(n = 5) {
	for (let i = 1; i <= n; i++) {
		const lineArr = new Array(2 * n).join(' ').split('');
		lineArr.splice(0, 2 * i - 1, new Array(2 * i).join('*'));
		console.log(lineArr.reverse().join(''));
	}
}

// 1 1
// 3 5
// 5 9
//   * 3
//  *** 2
// *****

// 宽度 2n-1     n行数
// 位置 n - i  i第几行
// 个数 2i-1 i第几行


function getNumArr(times = 6) {
	const arr = [];
	let num = 0;
	while(arr.length < times) {
		num = Math.floor(Math.random() * 34);
		if (arr.indexOf(num) === -1) {
			arr.push(num);
		}
	}
	return arr;
}

function ball() {
	const reds = getNumArr(6).sort((a, b) =>  a - b);
	const blues = getNumArr(2).sort((a, b) =>  a - b);
	console.log(`
		red: ${reds.join(', ')}
		blue: ${blues.join(', ')}
	`)
}