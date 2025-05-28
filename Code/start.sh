#!/bin/bash

# ========== path ==========
FRONTEND_DIR="./Front-end"
BACKEND_DIR="./Back-end"

# ========== running front-end ==========
echo "🚀 Starting front-end..."

cd "$FRONTEND_DIR" || {
  echo "❌ Failed to enter frontend directory: $FRONTEND_DIR"
  exit 1
}

echo "📦 Installing frontend dependencies..."
npm install

echo "🟢 Running frontend..."
npm start &  

cd ..

# ========== running back-end ==========
echo "🚀 Starting back-end..."

cd "$BACKEND_DIR" || {
  echo "❌ Failed to enter backend directory: $BACKEND_DIR"
  exit 1
}

# Determine whether it is the first build (whether there is already a target folder)
if [ ! -d "target" ]; then
  echo "📦 First-time setup: installing backend dependencies..."
  ./mvnw clean install -DskipTests
else
  echo "✅ Backend already built. Skipping clean install."
fi

echo "🟢 Running backend server..."
./mvnw spring-boot:run
