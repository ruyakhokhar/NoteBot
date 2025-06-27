import React from 'react'

export default function NoteList({notes}) {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Your Notes</h2>

      {notes.length === 0 ? (
        <div className="text-gray-500 text-center">No notes yet. Start writing!</div>
      ) : (
        <ul className="space-y-4">
          {notes.map((note, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="mb-2">
                <p className="text-gray-700 whitespace-pre-wrap">{note.text}</p>
              </div>

              {note.summary && (
                <div className="mt-3 bg-gray-100 rounded-md p-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-500">AI Summary:</span>{' '}
                    {note.summary}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
