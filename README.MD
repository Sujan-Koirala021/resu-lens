

# <p align="center">ResuLens: Automated Resume Screener</p>
<p align="center">
    <a href="https://github.com/Sujan-Koirala021/resu-lens" target="blank">
        <img src="https://img.shields.io/github/watchers/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="Watchers"/>
    </a>
    <a href="https://github.com/Sujan-Koirala021/resu-lens/fork" target="blank">
        <img src="https://img.shields.io/github/forks/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="Forks"/>
    </a>
    <a href="https://github.com/Sujan-Koirala021/resu-lens/stargazers" target="blank">
        <img src="https://img.shields.io/github/stars/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="Star"/>
    </a>
    <a href="https://github.com/Sujan-Koirala021/resu-lens/issues" target="blank">
        <img src="https://img.shields.io/github/issues/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="Issue"/>
    </a>
    <a href="https://github.com/Sujan-Koirala021/resu-lens/pulls" target="blank">
        <img src="https://img.shields.io/github/issues-pr/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
    </a>
    <!-- <a href="https://github.com/Sujan-Koirala021/resu-lens/blob/master/LICENSE" target="blank">
        <img src="https://img.shields.io/github/license/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="License" />
    </a> -->
</p>


## Overview
ResuLens is a sophisticated automated resume screening tool that utilizes artificial intelligence and natural language processing to effectively match resumes with job descriptions. This project is designed to optimize the recruitment process by delivering precise and unbiased resume assessments.

## Problem Statement
Organizations face significant challenges in the inefficiency and subjectivity of manual resume screening. Recruiters often struggle to evaluate numerous applications swiftly while
maintaining fairness and unbiased selection processes. Therefore, there is a need for an automated solution that can efficiently screen resumes based on the job requirements, allowing
recruiters to focus their efforts on engaging with the most suitable candidates.


## Demo
[![Watch the video](https://github.com/user-attachments/assets/109f460a-b847-40d5-9c95-791b4ec1c2a4)](https://youtu.be/h6oRwida0T0)



## 🚀 What Makes ResuLens Stand Out?  

ResuLens revolutionizes resume screening by integrating **AI-driven intelligence** with a **flexible and efficient system**. Unlike traditional keyword-based filtering, it employs **natural language processing (NLP) and machine learning** to provide **accurate, unbiased, and scalable** resume evaluations.  

### 🔹 **AI-Powered Resume Matching**  
- Uses **sentence transformers** (`all-MiniLM-L12-v2`) and **cosine similarity** to match resumes with job descriptions beyond keyword-based filtering.  
- Ensures a **context-aware** evaluation of candidate skills and experiences.  

### 🔹 **Automated NLP-Based Resume Parsing**  
- Extracts key details using **Rule-based Named Entity Recognition (NER)** and **Groq API** for **faster and more precise** resume processing.  
- Identifies **skills, education, experience, and soft skills** dynamically.  

### 🔹 **Feature Flags for Customization**  
- Integrated with **Flagsmith**, allowing real-time toggling of features like **resume summarization, API integration, and processing limits** without redeployment.  
- Provides **adaptive control** for different screening needs.  

### 🔹 **Bias Reduction & Fair Screening**  
- Focuses on **skills-based evaluation**, reducing biases associated with manual screening.  
- Ensures **unbiased ranking** of candidates by analyzing resumes **contextually and systematically**.  

### 🔹 **Efficient & Scalable Processing**  
- Supports **batch resume uploads** with **automated tabular scoring** for easy interpretation.  
- Designed to **scale seamlessly** for companies handling high volumes of applications.  

By leveraging **AI, NLP, and configurable feature flags**, ResuLens **enhances accuracy, efficiency, and fairness** in hiring—helping recruiters focus on **the best-fit candidates** faster than ever. 


## 🔍 How It Works  

ResuLens simplifies **resume screening** into a **seamless** and **efficient** process:  

🚀 **Step 1:** **Define Job Requirements**  
→ Fill out a form with **job specifications**, including required skills, experience, and qualifications.  

📂 **Step 2:** **Upload Resumes**  
→ Upload multiple resumes in **PDF format** for AI-powered screening.  

🤖 **Step 3:** **AI-Powered Processing**  
→ Each resume is analyzed using **Rule-based Named Entity Recognition (NER)** or **Groq API** for **intelligent data extraction**.  

📊 **Step 4:** **Scoring & Matching**  
→ Extracted information is matched with the job requirements to **calculate key component scores**.  

🎯 **Step 5:** **Similarity Analysis**  
→ Uses **sentence transformers** (`all-MiniLM-L12-v2`) and **cosine similarity** to measure **how well a resume aligns** with the job description.  

✨ **Outcome:** A detailed **tabular report** with **clear scoring metrics**, allowing recruiters to **identify top candidates effortlessly!**  

<!-- 6. The final weighted score is calculated as:
   ```
   final_score = (skills_score * 0.25) + (soft_skill_score * 0.1) + (degree_score * 0.1) + 
                 (major_score * 0.1) + (resume_similarity_score * 0.3) + (experience_score * 0.15)
   ``` -->

## Feature Flags with Flagsmith
Flagsmith is integrated to facilitate flexible system configuration:
- **Groq API Integration**: Enable/disable the use of Groq API for improved text extraction
- **Maintenance Mode**: Easily allow system maintenance when needed
- **Processing Capacity**:  Edit the number of resumes that can be processed by a system at a time
- **Resume Summary**: Enable/disable the resume summarization feature
- **Score Weights**: Assign weights to different scores to get final weighted score

![Image](https://github.com/user-attachments/assets/2f48db57-ed28-415e-a0e4-c11183feea17)


## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/) (to clone the repository)
- [Node.js](https://nodejs.org/) (for JavaScript runtime, package management, etc.)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for managing dependencies)

## Installation
### Clone the Repository

Start by cloning the repository to your local machine using Git.

```bash
git clone https://github.com/Sujan-Koirala021/resu-lens.git
```
## Frontend Setup
### Navigate to the frontend directory:
```bash
cd frontend
```

### Create your own .env file under server directory

```bash
VITE_FLAGSMITH_KEY=<YOUR_FLAGSMITH_API_KEY>
```

### Install dependencies:
```bash
npm install
```

### Start the development server:
```bash
npm run dev
```
## Backend Setup
### Navigate to the backend directory:
```bash
cd ../backend
```
### Create your own .env file under server directory

```bash
GROQ_API_KEY=<YOUR_GROQ_API_KEY>
```

### Create and Activate  Virtual Environment
```bash
python -m venv env
```

```bash
source env/bin/activate
```
For windows,
```bash
.\env\Scripts\activate
```
### Install dependencies
```bash
pip install -r requirements.txt
```

### Start the backend server
```bash
fastapi dev app.py
```
*Note: Wait for some time for the model to load in the backend server, i.e., until the* ```Application startup complete``` *message appears.*

## Screenshots
![Image](https://github.com/user-attachments/assets/5e5e5c64-1752-4b3a-9d37-94e9ce1acdf5)

![Image](https://github.com/user-attachments/assets/30df6cf1-54b1-470a-8e3b-304a91dbd217)

![Image](https://github.com/user-attachments/assets/0256bee0-b2c7-4fec-bdd0-5754b5649701)

![Image](https://github.com/user-attachments/assets/6ffa7dfb-a617-4678-85ef-cc5ad6bffcd6)

![Image](https://github.com/user-attachments/assets/f2160d75-d1aa-4e4e-96b3-bab8d166eaea)


## Technologies Used

- **Flagsmith**: Feature flagging service to manage and control feature rollouts.
- **React**: Frontend library for building user interfaces.  
- **Vite**: Fast frontend build tool.  
- **Tailwind CSS**: Utility-first CSS framework.   
- **Groq API**: Fast AI interface.  
- **Python**: Robust backend build.  
- **spaCy**: Natural language processing library for advanced text analysis.  
- **Sentence-Transformers**: Model for generating semantic text embeddings for improved matching.  


## Authors
 - [@Subash Lamichhane](https://github.com/Subash-Lamichhane)

 - [@Sujan Koirala](https://github.com/Sujan-Koirala021)
