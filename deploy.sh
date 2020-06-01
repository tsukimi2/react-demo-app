#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a client/build/ travis@68.183.94.49:/home/abhiap/test/client
  rsync -a server/ travis@68.183.94.49:/home/abhiap/test/server
else
  echo "Not deploying, since this branch isn't master."
fi