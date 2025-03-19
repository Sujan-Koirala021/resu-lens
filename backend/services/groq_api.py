import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Groq client with API key
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
async def respond_query(resume_text: str, query):
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
                    "content": f"{query}: {resume_text}",
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        
        # Return the extracted skills (or any other content the model provides)
        return chat_completion.choices[0].message.content
    
    except Exception as e:
        raise Exception(f"Error interacting with Groq API: {str(e)}")
