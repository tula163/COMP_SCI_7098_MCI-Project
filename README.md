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

   # for Windows ----- active virtural environment
   venv\Scripts\activate

   # for  macOS/Linux ----- active virtural environment
   source venv/bin/activate

   #  install dependency
   pip install -r requirements.txt

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
   #  active virtural environment
   source venv/bin/activate
   # start server
   python manage.py runserver
   ```



## 3. Quick start(make sure you have install all dependency and creat virtural environment before)

   ```bash
   cd Code
   bash ./start
   ```
   
# Document organizaton
1. Agendas: stored in `docs/Agendas/~`
2. Minutes: stored in `docs/Minutes/~`
3. Timesheets: stored in `docs/Timesheets/~`
4. Output documents for each week, such as report slides, table images and prototypes: store in `docs/Report/~`, with a folder name with the week number.
5. Models: model training data stored in `models/datafiles/~`, named with a specific title, for example, `Migrant requirements.csv`.
6. Back-end codes: stored in `backend/~` after testing and merging on the main branch.
7. Front-end codes: stored in `frontend/~` after testing and merging on the main branch.
8. Codes management: Firstly, we should create a branch named after our name and push the codes on this branch. After testing on local devices, the codes will be merged into the main branch to continue future testing.
9. Document sharing: use `Microsoft 365` to share all the editable documents, such as slides, Word and Excel, which can help members monitor and check each other and facilitate cooperation.

# Branch specification
- Branch `main` is for distribution, merge only verified stable versions and all documents.
- Branch `DEV` is for development, both front-end, back-end and model, just for coding.

# Project taskboard
There is a taskboard recording the tasks for our project, shown in `Project - HA1` <br>

# Archetecture and Technology stack
This project follows the “Frontend-Backend Separation with MVC-based Backend” architecture:

## Frant-end
- Framework: React 
- Package Manager: NPM
- HTTP Client: Axios 
- UI Library: Ant Design (antd)
- Style management tool : Scss
- State Management: Utilizes React’s built-in `useState` and `useEffect` hooks (`Redux` is not used)

## Back-end
- Framework: Spring Boot 
- Build Tool: Maven 
- Database: MySQL 
- Language: Java

## Model
- Language: Python
