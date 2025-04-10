'use client'

import { useRef, useState } from 'react'

export default function RecordingPage() {
  const [recording, setRecording] = useState(false)
  const [recordings, setRecordings] = useState([])
  const [audioURLs, setAudioURLs] = useState([])
  const [showRecordings, setShowRecordings] = useState(false)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  const toggleRecording = async () => {
    if (recording) {
      mediaRecorderRef.current?.stop()
      setRecording(false)
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorderRef.current = mediaRecorder
        audioChunksRef.current = []

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data)
          }
        }

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
          setRecordings((prev) => [...prev, audioBlob])

          const reader = new FileReader()
          reader.onloadend = async () => {
            const base64Audio = reader.result

            try {
              const res = await fetch('/api/audio', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  userId: 'user123',
                  filename: `recording-${Date.now()}.webm`,
                  audioBase64: base64Audio,
                }),
              })

              const data = await res.json()
              if (!res.ok) throw new Error(data.error)
              console.log('✅ Audio uploaded to DB')
            } catch (err) {
              console.error('❌ Upload failed:', err)
              alert('Failed to save audio')
            }
          }

          reader.readAsDataURL(audioBlob)
        }

        mediaRecorder.start()
        setRecording(true)
      } catch (err) {
        console.error('🎤 Microphone access error:', err)
      }
    }
  }

  const toggleShowRecordings = async () => {
    if (!showRecordings) {
      try {
        const res = await fetch('/api/audio')
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to fetch recordings')

        const recordings = data.map((audio) => ({
          id: audio._id,
          url: audio.audioUrl,
        }))

        setAudioURLs(recordings)
      } catch (err) {
        console.error('❌ Error fetching recordings:', err)
        alert('Could not load recordings from database')
      }
    }

    setShowRecordings((prev) => !prev)
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/audio', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      // Update state
      setAudioURLs((prev) => prev.filter((item) => item.id !== id))
      console.log('🗑️ Deleted recording')
    } catch (err) {
      console.error('❌ Error deleting audio:', err)
      alert('Failed to delete recording')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        🎙️ Voice Notes Recorder
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={toggleRecording}
          className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 ${
            recording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {recording ? '⏹️ Stop Recording' : '🎤 Start Recording'}
        </button>

        <button
          onClick={toggleShowRecordings}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-lg transition duration-300"
        >
          {showRecordings ? '🙈 Hide Recordings' : '📂 Show Recordings'}
        </button>
      </div>

      {showRecordings && (
        <div className="mt-10 w-full max-w-2xl space-y-6">
          {audioURLs.map((audio, index) => (
            <div
              key={audio.id || index}
              className="bg-black/50 border border-gray-600 rounded-xl shadow-lg backdrop-blur-md p-4 flex items-center gap-4"
            >
              <span className="text-2xl">🎧</span>
              <audio controls src={audio.url} className="flex-1" />
              <button
                onClick={() => handleDelete(audio.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full"
              >
                🗑️ Delete
              </button>
            </div>
          ))}

          {audioURLs.length === 0 && (
            <p className="text-gray-200 mt-6 text-sm">No recordings yet. Start talking! 🗣️</p>
          )}
        </div>
      )}
    </div>
  )
}
