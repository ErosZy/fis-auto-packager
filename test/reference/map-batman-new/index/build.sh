#!/bin/bash
set -e
# add path
export PATH=/home/fis/npm/bin:$PATH
#show fis-pc version
fisp --version --no-color
#use --unique option
fisp release -Domuld output --no-color 
