#!/usr/bin/env sh

phantomjs runner.js $1 | ffmpeg -f image2pipe -c:v png -r 25 -i - -f mp4 -pix_fmt yuv420p -movflags frag_keyframe+empty_moov -y out.mp4
