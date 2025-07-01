# NoteBot — Your AI Grammar Assistant

NoteBot is an AI-powered note-taking app that helps you write, summarize, and polish your thoughts with ease. Built using **React** on the frontend and **Express.js** on the backend, NoteBot integrates with **OpenAI's GPT API** (via OpenRouter) to generate grammar-corrected summaries of your notes in real time.

---

## ✨ Features

- ✅ **Grammar Correction** – Automatically refines your note content.
- ✅ **Live Preview** – See summaries instantly once you click the Grammar Check button.
- ✅ **Add / Delete Notes** – Manage your notes with a simple UI.
- ✅ **No Database** – Purely frontend-managed state.

---

## 🛠️ Tech Stack

| Frontend      | Backend        | AI Integration   |
| ------------- | -------------- | ---------------- |
| React + Vite  | Node + Express | OpenRouter (GPT) |
| Tailwind CSS  | Body-parser    | dotenv           |

---

## 📸 Screenshots

![NoteBot Logo](./frontend/src/assets/NoteBot.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ruyakhokhar/NoteBot.git
cd NoteBot
2. Install Dependencies

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
3. Configure your API Key
Create an .env file inside the backend folder:

OPENROUTER_API_KEY=your_openrouter_api_key_here
4. Start the App

# Terminal 1: Backend
cd backend
node index.js

# Terminal 2: Frontend
cd frontend
npm run dev
Visit: http://localhost:5173/

💻 Example Workflow
Open the app.

Type a note in the editor.

Click "Grammar Check with AI".

AI generates an output with the correct grammar of your note.

Click "Save" to store the note.

Notes appear in a list with delete functionality.

🔐 Security Tip
Do NOT commit your API keys to GitHub.

Add .env to .gitignore.

🤖 AI Models Used
google/gemini-2.5-flash

Fast, cost-efficient grammar correction

🧠 Slogan
"Write right with NoteBot."

📝 Notes
No database is used - notes exist only in frontend memory.

The app is not deployed or hosted yet.

Ideal for local experiments, demos, or personal productivity tools.

👤 Author
Made with ❤️ by Ruya Khokhar
LinkedIn • GitHub