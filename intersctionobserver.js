const io = new IntersectionObserver((a, b, c) => {
	console.log(a)
	showImg(a);
});

function showImg(arr) {
	arr.forEach(b => {
		if (b.target.className !== 'show') {
			b.target.className = 'show';
		}
		io.unobserve(b.target);
	})
}

var img = document.getElementsByTagName('img');
[...img].forEach(i => {
	io.observe(i);
});