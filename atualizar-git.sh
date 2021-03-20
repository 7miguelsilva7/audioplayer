#!/bin/bash
git pull
git add --all
git commit -m "update"
git push

ssh -t u378308740@153.92.6.22 -p 65002 "
cd domains/leituracrista.com/audioplayer && 
bash resetGit
"


if [ -e /opt/lampp/htdocs/ssh-audioPlayer.sh ]; then 
/opt/lampp/htdocs/ssh-audioPlayer.sh;

else 
chromium-browser https://cpanel.hostinger.com.br/git/index/aid/29500595; 
fi