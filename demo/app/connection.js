"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var SocketIO = require('nativescript-socket.io');
var SocketIO = require("nativescript-socket.io");
exports.socket = SocketIO.connect('http://192.168.1.111:3210/demo', {
    // log: true,
    // secure: false,
    // forceWebsockets: true,
    // query: 'scope=client&token=123',
    query: {
        scope: 'client',
        token: '123',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvREFBb0Q7QUFDcEQsaURBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQTBCO0lBQzNGLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxLQUFLO0tBQ2Y7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHZhciBTb2NrZXRJTyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zb2NrZXQuaW8nKTtcbmltcG9ydCAqIGFzIFNvY2tldElPIGZyb20gJ25hdGl2ZXNjcmlwdC1zb2NrZXQuaW8nO1xuXG5leHBvcnQgdmFyIHNvY2tldCA9IFNvY2tldElPLmNvbm5lY3QoJ2h0dHA6Ly8xOTIuMTY4LjEuMTExOjMyMTAvZGVtbycsIDxTb2NrZXRJTy5Tb2NrZXRPcHRpb25zPntcbiAgICAvLyBsb2c6IHRydWUsXG4gICAgLy8gc2VjdXJlOiBmYWxzZSxcbiAgICAvLyBmb3JjZVdlYnNvY2tldHM6IHRydWUsXG4gICAgLy8gcXVlcnk6ICdzY29wZT1jbGllbnQmdG9rZW49MTIzJyxcbiAgICBxdWVyeToge1xuICAgICAgICBzY29wZTogJ2NsaWVudCcsXG4gICAgICAgIHRva2VuOiAnMTIzJyxcbiAgICB9LFxufSk7XG4iXX0=