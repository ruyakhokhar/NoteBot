import React from 'react'

export default function NoteList({ notes, onDelete }) {
  // const handleDelete = () => {
  //   notes.
  // }

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
              className="bg-white rounded-3xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition"
            >
              <div className="flex md:flex-row md:items-center md:justify-between gap-4">
                <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition text-sm text-gray-700 leading-relaxed text-left">
                  <p>
                    {note.summary ? note.summary : note.text}
                  </p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => onDelete(note.id)}
                  className="bg-red-500 min-w-[14%] hover:bg-red-600 text-white text-[0.8rem] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition"
                >
                  Delete note
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
