'use strict';

angular.module('apolloApp')
  .factory('EventService', function ($window) {

    var ws = new WebSocket('ws://127.0.0.1:8000/ws/web/' + $window.localStorage.APIKey);

    ws.onopen = function() {
      console.log('Websocket has been opened!');
    };

    ws.onmessage = function(message) {
      console.log(message);
    };

    function sendEvent (message) {
      ws.send(JSON.stringify(message));
    }

    return {
      sendEvent: function(message) {
        sendEvent(message);
      }
    };
  });
