#!/bin/bash
git pull
git add --all
git commit -m "update"
git push

if [ -e /opt/lampp/htdocs/ssh-audioPlayer.sh ]; then 
/opt/lampp/htdocs/ssh-audioPlayer.sh;

else 
chromium-browser https://cpanel.hostinger.com.br/git/index/aid/29500595; 
fi
