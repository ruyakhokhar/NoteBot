import { useState } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor'
import NoteBotLogo from './assets/NoteBot.png';

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
      <div className="flex justify-center">
  <img src={NoteBotLogo} alt="NoteBot Logo" className="md:h-13 md:w-60 rounded object-cover" />
</div>

      <NoteEditor onSave={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App
