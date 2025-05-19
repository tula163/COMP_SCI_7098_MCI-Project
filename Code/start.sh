#!/bin/bash

FRONTEND_DIR="./Front-end"
BACKEND_DIR="./Back-end"

# 启动前端
echo "🚀 启动前端中..."
cd "$FRONTEND_DIR" || exit
npm install
npm start &  # 如果没有 dev 脚本，改成 npm run start
cd ..

# 启动后端
echo "🚀 启动后端中..."
cd "$BACKEND_DIR" || exit
./mvnw spring-boot:run
