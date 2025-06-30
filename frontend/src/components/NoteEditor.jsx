import React, { useState } from 'react';

export default function NoteEditor({ onSave }) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (!text.trim()) return;

    // const newNote = {
    //   id: crypto.randomUUID(),
    //   content: text,
    //   AISummary: summary,
    // }

    onSave({ id: crypto.randomUUID(), text, summary });
    setText('');
    setSummary('');

    console.log("✍️ Saving note:", text);
  };

  const handleGrammarCheck = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      setSummary('');

      await new Promise((r) => setTimeout(r, 1000)); // 1s delay

      const res = await fetch('http://localhost:5000/api/grammarcheck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Grammar check failed.');

      setSummary(data.summary);
    } catch (error) {
      console.error('Error:', error.message);
      setSummary(`${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mx-6 mt-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-[#00263e]">Create a New Note</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start writing your brilliant note here..."
        className="w-full p-4 text-base leading-relaxed border border-gray-300 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner focus:outline-none focus:ring-1 focus:border-[#00263e] transition-all duration-200 placeholder:text-gray-400 placeholder:italic"
      />

      {summary &&
        <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl text-[#00263e] text-sm">
          <strong className="block mb-1">Note with correct grammar:</strong>
          <p>{summary}</p>
        </div>}

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={handleGrammarCheck}
          disabled={loading}
          className="bg-[#00263e] hover:bg-[#01446d] text-white font-medium px-5 py-2 rounded-xl shadow transition disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Grammar Check with AI'}
        </button>

        <button
          onClick={handleSave}
          className="bg-[#00263e] hover:bg-[#01446d] text-white font-medium px-5 py-2 rounded-xl shadow transition"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
