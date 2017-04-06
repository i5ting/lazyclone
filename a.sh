#! /bin/bash

url=$1;
reponame=$(echo $url | awk -F/ '{print $NF}' | sed -e 's/.git$//');

echo $url
echo $reponame

#
git clone $url $reponame

#
cd $reponame

exec $SHELL

if [ ! -d "./package.json" ]; then
  npm i
fi