#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a build/ travis@68.183.94.49:/home/abhiap/test/
else
  echo "Not deploying, since this branch isn't master."
fi