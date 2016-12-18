const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SerialPort = require('serialport');

const portName = process.argv[2];

let last_value_fame = 0;

if(portName === undefined) {
    SerialPort.list(function(err, ports) {
        ports.forEach(function(port) {
            console.log(port.comName);
        });
    });

    client.end();

    return -1;
}

const myPort = new SerialPort(portName, {
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: SerialPort.parsers.readline("\n")
 });

 function showPortClose() {
    console.log('port closed.');
 }

 function showError(error) {
    console.log('Serial port error: ' + error);
 }


function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}

function sendSerialData(data) {
  if(data.split(':')[1] === last_value_fame) {
    return;
  }

   if(data.indexOf(":") === -1) {
       return;
   }

    let m = data.split(":");

    for(let i = 0; i < m.length; i+2) {
        client.publish(mqtt_channel, m[i+1]);
        io.emit('change', { id: data.split(":")[0], value:  data.split(":")[1].replace("\r", "").trim()});
    }
}

myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);


app.get('/', function(req, res) {
    res.sendfile('index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', function(socket) {
    console.log('a user connected');
});


client.on('message', function (topic, message) {
    myPort.write(message.toString());
});
