const WebSocket = require('ws');
const fs = require('fs');
const outputStream = fs.createWriteStream('painting.txt');
const ws = new WebSocket('wss://ws-064f7ddfdc34212b7.wss.redditmedia.com/place?m=AQAAjcXeWO3sQdw7yfQwuua7JOK9ZySjEw4bsDwvaxX2yF79jYni');

ws.on('message', (data, flags) => {
	outputStream.write(data);
});


/*
wss://ws-088f6d4c0802f2358.wss.redditmedia.com/place?m=AQAAjq3eWOBnzpYiq0abqSrPQoSjfB5PdqeUcVCUiH3X_iobA4l6
GET wss://ws-088f6d4c0802f2358.wss.redditmedia.com/place?m=AQAAjq3eWOBnzpYiq0abqSrPQoSjfB5PdqeUcVCUiH3X_iobA4l6 HTTP/1.1
Host: ws-088f6d4c0802f2358.wss.redditmedia.com
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Origin: https://www.reddit.com
Sec-WebSocket-Version: 13
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,ja;q=0.6
Cookie: __gads=ID=d74cadc57a93d52c:T=1485195207:S=ALNI_MbRBf857cJY3PbGphckw4hBAt-3uw; __qca=P0-1161090749-1486139819993
Sec-WebSocket-Key: 05c/Tj6eZAA4uPKmwmizbA==
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits

*/