#! /bin/bash

url=$1;
reponame=$(echo $url | awk -F/ '{print $NF}' | sed -e 's/.git$//');

echo $url
echo $reponame

#
git clone $url $reponame

#
cd $reponame

if [ -f "./package.json" ]; then
  npm i
fi

exec $SHELL
