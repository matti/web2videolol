# web2videolol

stream web page to chromecast
thanks sampumon and http://mindthecode.com/recording-a-website-with-phantomjs-and-ffmpeg


  $ ./httpserver.sh
  $ ./stream.sh http://www.goodboydigital.com/pixijs/examples/12-2/
  $ ./cast.sh $(node findip.js | grep en | cut -d' ' -f2) $(node findchomecast.js)
