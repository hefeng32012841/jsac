'use strict';
function f() {
	console.log('i am outside')
}

{
	if (true) {
		function f() {
			console.log('i am inside');
		}
	}

	f();

	let {a} = [1, 2];

	console.log(a);
}

{
	const str = '111aaabbb';
	console.log(str.includes('ab', 5), str.includes('ab', 6));
	console.log(str.startsWith('1', 2), str.startsWith('1', 3));
	console.log(str.endsWith('b', 5), str.endsWith('b', 6), str.endsWith('b', 7));
}

{
	console.log(`
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	`)
}