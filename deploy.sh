#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a client/build/ travis@68.183.94.49:/home/abhiap/test/client
  rsync -a server/ travis@68.183.94.49:/home/abhiap/test/server

  pm2 restart all

else
  echo "Not deploying, since the branch isn't master."
fi