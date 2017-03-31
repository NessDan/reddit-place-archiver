const WebSocket = require('ws');
const fs = require('fs');
const secretSauce = 'PutTheTokenHere';

if (!fs.existsSync('paintings')) {
	fs.mkdirSync('paintings');
}

const outputStream = fs.createWriteStream('paintings/' + (new Date).getTime() + '.txt');
const ws = new WebSocket('wss://ws-0fbe136e4be6350f4.wss.redditmedia.com/place?m=' + secretSauce);

ws.on('message', (data) => {
	let response;

	try {
		response = JSON.parse(data).payload;
	} catch (e) {
		console.error(err);
	}

	const savedData = [response.x, response.y, response.color, response.author, (new Date).getTime()].toString() + "\r\n";

	outputStream.write(savedData);
});