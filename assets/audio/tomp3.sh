#!/bin/sh -x
for f in *.MP4; do
        /usr/local/Cellar/ffmpeg/2.5.4/bin/ffmpeg -i "$f" "$f.mp3"
#        /usr/bin/afconvert -d '.mp3' -f MPG3 "$f" -o "$f.mp3"
        echo "$f converted"
done