var application = require("application");

var debug = require('./debug')(__filename);

application.on(application.uncaughtErrorEvent, function (event) {
  debug('ERROR!');
  var error = event.android || event.ios;
  debug('ERROR!', error.name, error.message, error.stackTrace, error.nativeException);
});

application.start({ moduleName: "main-page" });
