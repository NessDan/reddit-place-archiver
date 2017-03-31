const WebSocket = require('ws');
const fs = require('fs');
const secretSauce = 'PutTheTokenHere';

if (!fs.existsSync('paintings')) {
	fs.mkdirSync('paintings');
}

const outputStream = fs.createWriteStream('paintings/' + (new Date).getTime() + '.txt');
const ws = new WebSocket('wss://ws-064f7ddfdc34212b7.wss.redditmedia.com/place?m=' + secretSauce);

ws.on('message', (data, flags) => {
	outputStream.write(data);
});