var mdns = require('mdns');

var browser = mdns.createBrowser(mdns.tcp('googlecast'));

browser.on('serviceUp', function(service) {
  //console.log('found device "%s" at %s:%d', service.name, service.addresses[0], service.port);
  console.log(service.addresses[0]);
  browser.stop();
});

browser.start();
