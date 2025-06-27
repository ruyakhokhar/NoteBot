import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor'

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]); // add new note to top
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NoteEditor onSave={handleAddNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App
