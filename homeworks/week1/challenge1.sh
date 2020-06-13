#!/bin/bash
j=$1
for (( i=1; i <=j; i++))
do
    touch $i.js
done

echo "檔案建立完成";