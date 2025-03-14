from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.groq_api import get_extracted_skills

app = FastAPI()

class Item(BaseModel):
    resume_text: str
    extracted_skills: str = ""

# Enable CORS for communication between the frontend and backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/extract_skills")
async def root(item: Item):
    # print(item.resume_text)
    item.extracted_skills = await get_extracted_skills(item.resume_text)
    print(item.extracted_skills)
    return item