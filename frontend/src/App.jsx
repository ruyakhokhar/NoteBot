import { useState } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor'

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]); // add new note to top
  };

  const handleDeleteNote = (idToDelete) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id != idToDelete));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-tight drop-shadow-sm mb-6">
        Note<span className="text-gray-800">Bot</span>
      </h1>
      <NoteEditor onSave={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App
