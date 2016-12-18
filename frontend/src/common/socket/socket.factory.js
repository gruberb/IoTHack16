angular
  .module('application.socket', ['btford.socket-io'])
  .factory('Socket', Socket);

 function Socket(socketFactory) {
    var myIoSocket = io.connect("localhost:3000");
    return myIoSocket;
 }
