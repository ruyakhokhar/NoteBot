import React, { useState } from 'react';

export default function NoteEditor({ onSave }) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (!text.trim()) return;
    onSave({ text, summary });
    setText('');
    setSummary('');
  };

  async function getAISummary(text) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // or your chosen model
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: `Summarize this note:\n\n${text}` },
        ],
        max_tokens: 100,
      }),
    });
  
    const data = await response.json();
    return data.choices[0].message.content;
  }

  const handleSummarize = async () => {
    const res = await fetch('http://localhost:5000/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div className="mx-6 mt-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a New Note</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start writing your brilliant note here..."
        className="w-full p-4 text-base leading-relaxed border border-gray-300 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder:text-gray-400 placeholder:italic"
      />

      {summary && (
        <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-sm">
          <strong className="block mb-1">AI Summary:</strong>
          <p>{summary}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={handleSummarize}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded-xl shadow transition disabled:opacity-50"
        >
          {loading ? 'Summarizing...' : 'Summarize with AI'}
        </button>

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow transition"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
