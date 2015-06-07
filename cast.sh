#!/usr/bin/env bash

while true; do
	castnow http://$1:8000/out.mp4 --address $2
	sleep 0.1
done
