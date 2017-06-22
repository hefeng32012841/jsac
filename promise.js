function getXHR() {
	return window.XMLHttpRequest
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP')
}

function get(url) {
	return getJSON('GET', url);
}

function post(url, data) {
	return getJSON('POST', url, data);
}

function getJSON(method = 'GET', url, data) {
	return new Promise((resolve, reject) => {
		const XHR = getXHR();
		XHR.onreadystatechange = function () {
			if (XHR.readystate === 4 && XHR.status === 200) {
				resolve(XHR.responseText);
			}
			else {
				reject();
			}
		}

		XHR.open(method, url, true);
		XHR.send(data);
	})
}

get('www.ad.com').then(data => {
	return post('www.aaa.com', {a: 1});
}).then(data => {
	console.log(data);
})

