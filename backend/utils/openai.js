import "dotenv/config";

const getGeminiAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gemini-3.6-flash",
            messages: [
                {
                    role: "user",
                    content: message
                }
            ]
        })
    };

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
            options
        );

        const data = await response.json();
        console.log(data);

        return data.choices[0].message.content;
    } catch (err) {
        console.log(err);
    }
};

export default getGeminiAPIResponse;