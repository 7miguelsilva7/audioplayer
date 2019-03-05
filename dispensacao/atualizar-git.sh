#!/bin/bash
git pull
git add --all
git commit -m "update"
git push

chromium-browser https://cpanel.hostinger.com.br/git/index/aid/29500595
