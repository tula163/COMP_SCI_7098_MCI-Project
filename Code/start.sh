#!/bin/bash


# 1. start backend
cd back || exit
source .venv/bin/activate


# start Django
python manage.py runserver 0.0.0.0:8000 &
BACK_PID=$!

# 2. start frontend
cd ../Front-end || { echo "Please check your path"; exit 1; }

npm start &
FRONT_PID=$!

# 3. Capture Ctrl+C to terminate all background services
trap "echo 'Quit...'; kill $BACK_PID $FRONT_PID; exit" SIGINT

# 4. Wait for any service to exit（or Ctrl+C）
wait -n
