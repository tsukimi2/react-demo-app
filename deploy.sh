#!/bin/bash
# Change <ipaddress> to your server's ip
# Replace <path> with the appropriate paths

set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a --exclude={'/node_modules','/src','/public'} client/ travis@<ip address>:<path>
  rsync -a server/ travis@<ip address>:<path>

else
  echo "Not deploying, since the branch isn't master."
fi

ssh travis@<ip address> 'pm2 restart all'