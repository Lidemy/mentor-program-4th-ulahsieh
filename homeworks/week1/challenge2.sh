#!/bin/bash

curl -s https://api.github.com/users/$1 | grep -w name | cut -d : -f 2| sed 's/",//g'| sed 's/ "//g'
curl -s https://api.github.com/users/$1 | grep bio | cut -d : -f 2| sed 's/",//g'| sed 's/ "//g'
curl -s https://api.github.com/users/$1 | grep location | cut -d : -f 2| sed 's/",//g'| sed 's/ "//g'
curl -s https://api.github.com/users/$1 | grep blog | sed 's/",//g'| sed 's/ "blog"://g' | sed 's/ "//g'
