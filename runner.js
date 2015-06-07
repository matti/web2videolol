var page = require('webpage').create();
page.viewportSize = { width: 640, height: 480 };

var system = require('system');
var url = system.args[1]

page.open(url, function () {
  setInterval(function() {
    page.render('/dev/stdout', { format: "png" });
  }, 25);
});
