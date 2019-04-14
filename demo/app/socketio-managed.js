"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var SocketIO = require('nativescript-socket.io');
var SocketIO = require("nativescript-socket.io");
// import * as SocketIO from './dev';
var ENDPOINT = 'http://192.168.1.111:3210/demo';
var instance;
function connect(token) {
    instance = SocketIO.connect(ENDPOINT, {
        // log: true,
        // secure: false,
        // forceWebsockets: true,
        // query: 'scope=client&token=' + token,
        query: {
            scope: 'client',
            token: token,
        },
    });
}
exports.connect = connect;
function getInstance() {
    return instance;
}
exports.getInstance = getInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0aW8tbWFuYWdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvY2tldGlvLW1hbmFnZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvREFBb0Q7QUFDcEQsaURBQW1EO0FBQ25ELHFDQUFxQztBQUVyQyxJQUFNLFFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQztBQUVsRCxJQUFJLFFBQVEsQ0FBQztBQUViLFNBQWdCLE9BQU8sQ0FBQyxLQUFLO0lBQ3pCLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBMEI7UUFDMUQsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsd0NBQXdDO1FBQ3hDLEtBQUssRUFBRTtZQUNILEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFYRCwwQkFXQztBQUVELFNBQWdCLFdBQVc7SUFDdkIsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyB2YXIgU29ja2V0SU8gPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtc29ja2V0LmlvJyk7XG5pbXBvcnQgKiBhcyBTb2NrZXRJTyBmcm9tICduYXRpdmVzY3JpcHQtc29ja2V0LmlvJztcbi8vIGltcG9ydCAqIGFzIFNvY2tldElPIGZyb20gJy4vZGV2JztcblxuY29uc3QgRU5EUE9JTlQgPSAnaHR0cDovLzE5Mi4xNjguMS4xMTE6MzIxMC9kZW1vJztcblxubGV0IGluc3RhbmNlO1xuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdCh0b2tlbikge1xuICAgIGluc3RhbmNlID0gU29ja2V0SU8uY29ubmVjdChFTkRQT0lOVCwgPFNvY2tldElPLlNvY2tldE9wdGlvbnM+e1xuICAgICAgICAvLyBsb2c6IHRydWUsXG4gICAgICAgIC8vIHNlY3VyZTogZmFsc2UsXG4gICAgICAgIC8vIGZvcmNlV2Vic29ja2V0czogdHJ1ZSxcbiAgICAgICAgLy8gcXVlcnk6ICdzY29wZT1jbGllbnQmdG9rZW49JyArIHRva2VuLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgc2NvcGU6ICdjbGllbnQnLFxuICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuIl19