'use client'
import React, { useState } from 'react'

const Page = () => {
  const [noteText, setNoteText] = useState('')
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState([])
  const [showingNotes, setShowingNotes] = useState(false)

  const handleSubmit = async () => {
    if (!noteText.trim()) return

    setLoading(true)

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'user123',
          text: noteText,
        }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      alert('✅ Note saved!')
      setNoteText('')
    } catch (err) {
      console.error(err)
      alert('❌ Failed to save note')
    }

    setLoading(false)
  }

  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes')
      const data = await res.json()
      setNotes(data)
      setShowingNotes(true)
    } catch (err) {
      console.error(err)
      alert('❌ Failed to fetch notes')
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4 text-white">
      {/* Title */}
      <div className="text-center text-4xl p-6">
        <h1 className="font-semibold leading-tight">
          📝 Make Your{' '}
          <span className="text-blue-400 font-bold">Notes</span> &{' '}
          <span className="text-purple-400 font-bold">To-Do&apos;s</span> Here! 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-400">Your creative space to write and remember ✨</p>
      </div>

      {/* Textarea */}
      <div className="p-4 w-full max-w-3xl">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="🧠 Write down your brilliant ideas, tasks, or anything else..."
          className="w-full h-[40vh] p-4 bg-black/50 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-gray-400 resize-none shadow-lg backdrop-blur-md"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-3xl">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="p-0.5 relative w-full sm:w-1/2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-sm opacity-75" />
          <div className="relative px-6 py-3 bg-black/80 rounded-xl border border-gray-700 transition duration-200 text-white hover:bg-transparent backdrop-blur-md z-10 text-center">
            {loading ? '✍️ Saving...' : '✉️ Submit Note'}
          </div>
        </button>

        <button
          type="button"
          onClick={fetchNotes}
          className="p-0.5 relative w-full sm:w-1/2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur-sm opacity-75" />
          <div className="relative px-6 py-3 bg-black/80 rounded-xl border border-gray-700 transition duration-200 text-white hover:bg-transparent backdrop-blur-md z-10 text-center">
            📂 Show Notes
          </div>
        </button>
      </div>

      {/* Notes Display */}
      {showingNotes && (
        <div className="mt-10 w-full max-w-3xl space-y-4 px-2">
          {notes.length === 0 ? (
            <p className="text-gray-400 text-center">🕳️ No notes found. Add new note now</p>
          ) : (
            notes.map((note) => (
              <div
                key={note._id}
                className="p-6 bg-black/50 border border-gray-600 rounded-2xl shadow-lg backdrop-blur-md"
              >
                <p className="text-white whitespace-pre-wrap">📝 {note.text}</p>
                <p className="text-xs text-gray-500 mt-2">
                  🕒 {new Date(note.createdAt).toLocaleString()}
                </p>

                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('/api/notes', {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id: note._id }),
                      })

                      const data = await res.json()
                      if (!res.ok) throw new Error(data.error)

                      // Remove note from UI
                      setNotes((prev) => prev.filter((n) => n._id !== note._id))
                    } catch (err) {
                      console.error(err)
                      alert('❌ Failed to delete note')
                    }
                  }}
                  className="mt-4 text-sm text-red-400 hover:text-red-500 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            ))
          )}
        </div>
      )}


    </div>
  )
}

export default Page
