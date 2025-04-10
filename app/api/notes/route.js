import { connectDB } from '../../../lib/mongodb'
import Note from '../../../models/Note'

export async function POST(req) {
  try {
    await connectDB()
    const { userId, text } = await req.json()

    const newNote = await Note.create({ userId, text })
    return new Response(JSON.stringify(newNote), { status: 201 })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to save note' }), { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const notes = await Note.find().sort({ createdAt: -1 })
    return new Response(JSON.stringify(notes), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch notes' }), { status: 500 })
  }
}

export async function DELETE(req) {
    await connectDB()
  
    try {
      const { id } = await req.json()
  
      const deleted = await Note.findByIdAndDelete(id)
  
      if (!deleted) {
        return Response.json({ error: 'Note not found' }, { status: 404 })
      }
  
      return Response.json({ message: 'Note deleted successfully' })
    } catch (err) {
      console.error(err)
      return Response.json({ error: 'Failed to delete note' }, { status: 500 })
    }
  }