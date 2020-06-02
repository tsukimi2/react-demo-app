#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a --exclude={"client/node_modules", "client/src", "client/public"} client/ travis@68.183.94.49:/home/abhiap/test/client
  rsync -a server/ travis@68.183.94.49:/home/abhiap/test/server

else
  echo "Not deploying, since the branch isn't master."
fi