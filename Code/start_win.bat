@echo off

REM ===== Check Python venv =====
cd back || exit /b

if not exist .venv (
    echo Python venv not found. Please create your virtual environment first.
    exit /b
)
call .venv\Scripts\activate

REM ===== Check Django dependency =====
pip show django >nul 2>&1
if errorlevel 1 (
    echo Python dependency 'django' not found, installing requirements...
    pip install -r requirements.txt
)

cd ..

REM ===== Check Node.js dependencies =====
cd Front-end || (echo Please check your path & exit /b)
if not exist node_modules (
    echo node_modules not found, running npm install...
    npm install
)

cd ..

REM ===== Start backend =====
cd back
call .venv\Scripts\activate
start "Django" cmd /k python manage.py runserver 0.0.0.0:8000

REM ===== Start frontend =====
cd ..\Front-end
start "Frontend" cmd /k npm start

REM ===== Keep terminal open =====
pause
