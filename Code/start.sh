#!/bin/bash

echo "🛠️ 启动前后端开发环境"

# ✅ 1. 启动后端
echo "📦 [后端] 进入 backend 目录..."
cd back || exit

# ✅ 创建虚拟环境（如果没有）
if [ ! -d ".venv" ]; then
  echo "🐍 创建 Python 虚拟环境 .venv..."
  python3 -m venv .venv
fi

echo "✅ 激活 Python 虚拟环境..."
source .venv/bin/activate

echo "📦 安装后端依赖..."
pip install -r requirements.txt

# ✅ 启动 Django 服务
echo "🚀 启动 Django 服务..."
python manage.py runserver 0.0.0.0:8000 &
BACK_PID=$!

# ✅ 2. 启动前端
cd ../Front-end || { echo "❌ 前端目录不存在，检查路径！"; exit 1; }

echo "📦 安装前端依赖..."
npm install

echo "🚀 启动前端开发服务器..."
npm start &
FRONT_PID=$!

# ✅ 3. 捕获 Ctrl+C 终止所有后台服务
trap "echo '🛑 终止中...'; kill $BACK_PID $FRONT_PID; exit" SIGINT

# ✅ 4. 等待任意服务退出（或 Ctrl+C）
wait -n
