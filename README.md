# NoteBot — Your AI Grammar Assistant

NoteBot is an AI-powered note-taking app that helps you write, summarize, and polish your thoughts with ease. Built using **React** on the front end and **Express.js** on the backend, NoteBot integrates with **Google's AI Studio API** (via OpenRouter) to generate grammar-corrected summaries of your notes in real-time.

---

## ✨ Features

- ✅ **Grammar Correction** – Automatically refines your note content.
- ✅ **Live Preview** – See summaries instantly once you click the Grammar Check button.
- ✅ **Add / Delete Notes** – Manage your notes with a simple UI.
- ✅ **No Database** – Purely frontend-managed state.

---

## 🛠️ Tech Stack

| Frontend      | Backend        | AI Integration |
| ------------- | -------------- | -------------- |
| React + Vite  | Node + Express | OpenRouter     |
| Tailwind CSS  | Body-parser    | dotenv         |

---

## 📸 Screenshots

![NoteBot Logo](./frontend/src/assets/NoteBot.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ruyakhokhar/NoteBot.git
cd NoteBot
```

### 2. Install Dependencies

# Frontend
```bash
cd frontend
npm install
```

# Backend
```bash
cd ../backend
npm install
```

### 3. Configure your API Key

Create an .env file inside the backend folder:
```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 4. Start the App

# Terminal 1: Backend
```bash
cd backend
node index.js
```

# Terminal 2: Frontend
```bash
cd frontend
npm run dev
```

Visit: http://localhost:5173/

### Example Workflow

1. Open the app.
2. Type a note in the editor.
3. Click "Grammar Check with AI".
4. AI generates an output with the correct grammar of your note.
5. Click "Save" to store the note.
6. Notes appear in a list with delete functionality.

### Security Tip

Do NOT commit your API keys to GitHub.

Add ```bash.env``` to ```bash.gitignore```.

### AI Models Used

*google/gemini-2.5-flash*


# Fast, cost-efficient grammar correction

### Slogan

*"Write right with NoteBot."*

### Notes

1. No database is used - notes exist only in frontend memory.
2. The app is not deployed or hosted yet.
3. Ideal for local experiments, demos, or personal productivity tools.

### Author

Made with ❤️ by Ruya Khokhar
[LinkedIn](https://www.linkedin.com/in/ruya-khokhar/) • [GitHub](https://github.com/ruyakhokhar/)

---
