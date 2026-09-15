# SigmaGPT

SigmaGPT is an AI-powered chatbot application inspired by ChatGPT. It provides an interactive conversational interface where users can create chat threads, send messages, and receive AI-generated responses using Google's Gemini API.

## Features

- AI-powered chat using Gemini API
- Create and manage multiple chat threads
- Real-time conversation interface
- Markdown support for AI responses
- Syntax highlighting for code blocks
- Modern React-based UI
- MongoDB database integration
- Persistent chat history

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Context API
- React Markdown
- Rehype Highlight
- React Icons
- React Spinners

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### AI Integration
- Google Gemini API

---

## 📂 Project Structure

```text
SigmaGPT/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── assets/
│   ├── components/
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/PalkiTyagi/SigmaGPT.git
cd SigmaGPT
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Start backend:

```bash
npm start
```

or

```bash
node server.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

##  Application Flow

1. User enters a message.
2. Frontend sends request to Express backend.
3. Backend calls Gemini API.
4. Gemini generates AI response.
5. Response is stored in MongoDB thread.
6. Frontend displays the response.
7. Chat history remains available for future sessions.

---

##  Database Schema

### Thread

```javascript
{
  threadId: String,
  title: String,
  messages: [],
  createdAt: Date,
  updatedAt: Date
}
```

### Message

```javascript
{
  role: "user" | "assistant",
  content: String,
  timestamp: Date
}
```

---

##  Future Enhancements

- User Authentication
- Dark/Light Theme
- Chat Search
- Export Chats
- Voice Input
- Streaming Responses
- File Upload Support
- AI Image Generation

---

##  Author

**Palki Tyagi**

- B.Tech CSE (AI/ML)
- Meerut Institute of Engineering and Technology (MIET)

GitHub:
https://github.com/PalkiTyagi

---


This project is developed for learning and educational purposes.
