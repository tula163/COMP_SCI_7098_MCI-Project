# HA1
Recommendation System

# Abstract
Recommendation systems have become indispensable across various domains, such as social networking , e-commerce, and digital marketing, by offering personalized suggestions and user-centric feedback. However, achieving high accuracy and reliability in these systems remains a critical challenge. This project aims to develop an `AI-driven recommendation system`, designed to deliver precise and context-aware recommendations tailored to individual user requirements. The approach involves generating synthetic data, selecting three leading AI models from existing research, training and testing these models, and conducting a comparative performance analysis based on accuracy. The evaluation will be conducted using a dataset of Australian Migration Agents, with the objective of effectively matching migrants to suitable migration agents based on their unique requirements and preferences.

# Team members
a1904387 `Manhong Chen`	<br>
a1916700 `Zihan Luo`<br>
a1883303 `Ziyan Zhao`	<br>
a1880849 `Jianghao Jin`	<br>
a1882117 `Jianing Dang`	

# How to start the project ?
## 1. git clone

   ```bash
   git clone https://github.cs.adelaide.edu.au/MCI-Project-2025/HA1.git
   ```

## 2. Normal start frontend and backend separate

### Backend (for initial)
   ```bash
   cd Back

   # create virtural environment 
   python -m venv venv

   # for Windows ----- in the GitHub Bash to active virtural environment
   source venv/Scripts/activate

   # for  macOS/Linux ----- active virtural environment
   source venv/bin/activate

   # install dependency
   pip install -r requirements.txt

   # if there is an error warming no matching distribution found for tensorflow-io-gcs-filesystem==0.37.1 for Windows users, please check the version you can get by the follwoing lines, then select a applicable version number and change the version number in the file requirements.txt
   pip index versions tensorflow-io-gcs-filesystem

   # initial database
   python manage.py migrate

   # start
   python manage.py runserver

   # (Optional) create your account for backstage management
   python manage.py createsuperuser
   ```

### Frontend start
   ```bash
   cd Code/Front-end
   # install dependency (optional: depend on if you have installed before)
   npm install
   # start server
   npm start
   ```

### Backend start
   ```bash
   cd Code/Back
   #  active virtural environment for Mac (Choose one of the two)
   source venv/bin/activate
   #  active virtural environment for Windows(Choose one of the two)
   source venv/Scripts/activate
   # start server
   python manage.py runserver
   ```

   
# Document organizaton
   ```bash
   Project-Root/
│
├── Assignments/              # Assignment documents (plans, reports, slides)
│
├── Code/                     # Main codebase
│   ├── Back/                 # Backend source code
│   ├── Front-end/            # Frontend source code 
│   └── start.sh              # Project startup script
│
├── Docs/                     # Project-related documentation
│   ├── Agendas/              # Meeting agendas
│   ├── Minutes/              # Meeting minutes/notes
│   ├── Report/               # Weekly achievements
│   ├── Test/                 # Test cases or plans
│   └── Timesheets/           # Team timesheet records
│
├── Models/                   # Machine learning models
│   ├── Dataset/              # Dataset preprocessing scripts or samples
│   ├── KNN-CF/               # K-Nearest Neighbors Collaborative Filtering model
│   ├── LightGCN/             # Light Graph Convolution Network model
│   ├── NCF/                  # Neural Collaborative Filtering model
│   └── Two_tower/            # Two-Tower recommendation model
│
├── .gitignore                # Git ignore rules
└── README.md                 # Project overview and instructions

   ```


# Archetecture and Technology stack
Frontend: React + MUI + Tailwind

Backend: Django + Python 3.11 + simpleui

Model: Two tower

Database: SQLite3

# Project management
## Issue and task
- There is a taskboard recording the tasks for our project, shown in `Project - HA1` <br>
- There is a `Wiki` for quickly find our project documents.

## Branch
- Branch `main` is for distribution, merge only verified stable versions and all documents.
- Branch `DEV` is for development, both front-end, back-end and model, just for coding.

## Document collaboration

use `Microsoft 365` to share all the editable documents, such as slides, Word and Excel, which can help members monitor and check each other and facilitate cooperation.




