#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
    echo "Loading environment for Mac"
    CURRENT_IP_ADDRESS=$(ifconfig en0 | grep inet | grep -v inet6 | cut -d ' ' -f2)
    OLD_DEVELOPMENT=$(cat .env.development | grep "NEXT_PUBLIC_API_URL" | cut -d'=' -f2)

    if test -z "$CURRENT_IP_ADDRESS" 
    then
        CURRENT_IP_ADDRESS=$(ifconfig en1 | grep inet | grep -v inet6 | cut -d ' ' -f2)
    fi

    find .env.development -type f | xargs sed -i '' "s|IP|http://${CURRENT_IP_ADDRESS}:3001|g"
    find .env.development -type f | xargs sed -i '' "s|$OLD_DEVELOPMENT|http://${CURRENT_IP_ADDRESS}:3001|g"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo "Loading environment for Linux"

    DEFAULT_INTERNET_INTERFACE=$(ip route | grep default | head -1 | sed 's/\(.*dev \)\([a-z0-9]*\)\(.*\)/\2/g')
    CURRENT_IP_ADDRESS=$(ifconfig ${DEFAULT_INTERNET_INTERFACE} | grep inet | grep -v inet6 | cut -d ' ' -f10)
    OLD_DEVELOPMENT=$(cat .env.development | grep "NEXT_PUBLIC_API_URL" | cut -d'=' -f2)


    find .env.development -type f | xargs sed -i "s|IP|http://${CURRENT_IP_ADDRESS}:3001|g"
    find .env.development -type f | xargs sed -i "s|$OLD_DEVELOPMENT|http://${CURRENT_IP_ADDRESS}:3001|g"
else 
    echo "Could not configure environment"
    exit 1
fi 