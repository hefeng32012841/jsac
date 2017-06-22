function getXHR() {
	return window.XMLHttpRequest
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
}

function sendAjax(mothed, url, data) {
	const XHR = getXHR();
	XHR.onreadystatechange = function () {
		// 0:未初始化
		// 1:请求已发出
		// 2:请求已接受
		// 3:请求处理中
		// 4:请求已完成
		if (XHR.readystate === 4 && XHR.status === 200) {
			XHR.responseText
		}
	}
	XHR.open(mothed, url, true);
	XHR.send(data);
}