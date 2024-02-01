#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
    echo "Loading environment for Mac"
    OLD_DEVELOPMENT=$(cat .env.development | grep "NEXT_PUBLIC_API_URL" | cut -d'=' -f2)

    find .env.development -type f | xargs sed -i '' "s|IP|http://localhost:3001|g"
    find .env.development -type f | xargs sed -i '' "s|$OLD_DEVELOPMENT|http://localhost:3001|g"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo "Loading environment for Linux"
    OLD_DEVELOPMENT=$(cat .env.development | grep "NEXT_PUBLIC_API_URL" | cut -d'=' -f2)

    find .env.development -type f | xargs sed -i "s|IP|http://localhost:3001|g"
    find .env.development -type f | xargs sed -i "s|$OLD_DEVELOPMENT|http://localhost:3001|g"
else 
    echo "Could not configure environment"
    exit 1
fi 