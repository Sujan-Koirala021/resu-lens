import dotenv from 'dotenv';
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function main() {
//   try {
//     console.log("Starting to fetch chat completion...");
//     const chatCompletion = await getGroqChatCompletion("Meal for Siberian Husky");
    
//     console.log("Chat completion result:", chatCompletion); // Log the result to ensure it's fetched.
//     console.log(chatCompletion.choices[0]?.message?.content || "No content found.");
//   } catch (error) {
//     console.error("Error fetching chat completion:", error);
//   }
// }

// main(); // Ensure this line is calling the function

export async function getGroqChatCompletion(query) {
  const groqRawRes =  await groq.chat.completions.create({
    messages: [
        // Define the assistant's role as a pet care expert
        {
          role: "system",
          content: "You are a job-recruiter that extracts skills from the provided resume or job description and provides extracted skills in list data structure.",
        },
        // User's dynamic query
        {
          role: "user",
          content: query,
        },
      ],
    model: "llama3-8b-8192",
  });
  
  return (groqRawRes.choices[0]?.message?.content || "");
}