

  $ ./httpserver.sh
  $ ./stream.sh http://www.goodboydigital.com/pixijs/examples/12-2/
  $ ./cast.sh $(node findip.js | grep en | cut -d' ' -f2) $(node findchomecast.js)

  
