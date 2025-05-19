#!/bin/bash

FRONTEND_DIR="./Front-end"
BACKEND_DIR="./Back-end"

# run front-end
echo "🚀 client running ..."
cd "$FRONTEND_DIR" || exit
npm install
npm start &  
cd ..

# run back-end
echo "🚀 server running..."
cd "$BACKEND_DIR" || exit
./mvnw spring-boot:run
