import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Groq client with API key
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

async def get_extracted_skills(resume_text: str):
    try:
        # Send a request to the Groq API to extract skills from resume
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "you are a helpful employee recruiter."
                },
                {
                    "role": "user",
                    "content": f"Extract skills from the following resume and return just only list of skills. No other nonsense like here is your. Strictly list of skills like ['Python', 'Pytorch'] : {resume_text}",
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        
        # Return the extracted skills (or any other content the model provides)
        return chat_completion.choices[0].message.content
    
    except Exception as e:
        raise Exception(f"Error interacting with Groq API: {str(e)}")
