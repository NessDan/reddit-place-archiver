const WebSocket = require('ws');
const fs = require('fs');

if (!fs.existsSync('paintings')) {
	fs.mkdirSync('paintings');
}

const outputStream = fs.createWriteStream('paintings/' + (new Date).getTime() + '.txt');
const ws = new WebSocket('wss://ws-064f7ddfdc34212b7.wss.redditmedia.com/place?m=AQAAjcXeWO3sQdw7yfQwuua7JOK9ZySjEw4bsDwvaxX2yF79jYni');

ws.on('message', (data, flags) => {
	outputStream.write(data);
});