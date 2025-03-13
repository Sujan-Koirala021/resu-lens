import { getGroqChatCompletion } from "../groq-service/groqResponse.groq-service.js";

export const extractSkills = async (req, res) => {
    try {
        const {query} = req.body;
        const chatResponse = await getGroqChatCompletion(query);
        if (!chatResponse){
            return res.status(404).json({"error": "Failed to get response"})
        }
        res.status(200).json({"response": chatResponse})

    } catch (error) {
        console.log("Error in extractSkill controller",error);
        res.status(500).json({"error": "Internal server error"})
        
    }
}