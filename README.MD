

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
    <a href="https://github.com/Sujan-Koirala021/resu-lens/blob/master/LICENSE" target="blank">
        <img src="https://img.shields.io/github/license/Sujan-Koirala021/resu-lens?style=for-the-badge&logo=appveyor" alt="License" />
    </a>
</p>


## Overview
ResuLens is a sophisticated automated resume screening tool that utilizes artificial intelligence and natural language processing to effectively match resumes with job descriptions. This project is designed to optimize the recruitment process by delivering precise and unbiased resume assessments.

## Problem Statement
Organizations face significant challenges in the inefficiency and subjectivity of manual re-
sume screening. Recruiters often struggle to evaluate numerous applications swiftly while
maintaining fairness and unbiased selection processes. Therefore, there is a need for an au-
tomated solution that can efficiently screen resumes based on the job requirements, allowing
recruiters to focus their efforts on engaging with the most suitable candidates

# Dataset 


## ✨ Features  
- **Advanced NLP Extraction**: Extract key information from resumes including skills, education, experience, soft skills, and personal details
- **Intuitive  Interface**: Upload multiple resumes and get results in a simple-to-understand tabular format
- **Job-Resume Matching**: Calculate similarity between job descriptions and resumes using sentence transformers and cosine similarity
- **Efficient Screening**: Provide unbiased and rapid resume screening with comprehensive scoring

## How It Works
1. Users fill out a form detailing the job requirements and specifications
2. Users upload resumes in PDF format for screening
3. The system processes each resume through Rule-based Named Entity Recognition (NER) or Groq API.
4. Data is extracted and matched with job specification to calculate component scores
5. Similarity score is calculated using sentence transformers (all-MiniLM-L12-v2) and cosine similarity
6. The final weighted score is calculated as:
   ```
   final_score = (skills_score * 0.25) + (soft_skill_score * 0.1) + (degree_score * 0.1) + 
                 (major_score * 0.1) + (resume_similarity_score * 0.3) + (experience_score * 0.15)
   ```

## Feature Flags with Flagsmith
Flagsmith is integrated to facilitate flexible system configuration:
- **Groq API Integration**: Enable/disable the use of Groq API for improved text extraction
- **Maintenance Mode**: Easily allow system maintenance when needed
- **Processing Capacity**:  Edit the number of resumes that can be processed by a system at a time
- **Resume Summary**: Enable/disable the resume summarization feature

## Demo

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


## Screenshots



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
