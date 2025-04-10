import { connectDB } from '@/lib/mongodb'
import Audio from '@/models/Audio'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectDB()
    const { userId, audioBase64, filename } = await req.json()

    if (!audioBase64 || !userId) {
      return new Response(JSON.stringify({ error: 'Missing audio or userId' }), { status: 400 })
    }

    const newAudio = await Audio.create({
      userId,
      audioUrl: audioBase64,
      filename: filename || 'recording',
    })

    return new Response(JSON.stringify(newAudio), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}

export async function GET() {
    try {
      await connectDB()
      const audios = await Audio.find({}).sort({ createdAt: -1 })
      return NextResponse.json(audios)
    } catch (error) {
      console.error('Error fetching audios:', error)
      return NextResponse.json({ error: 'Failed to load audio data' }, { status: 500 })
    }
  }
  
  export async function DELETE(req) {
    try {
      await connectDB()
      const { id } = await req.json()
  
      if (!id) {
        return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
      }
  
      await Audio.findByIdAndDelete(id)
      return NextResponse.json({ message: 'Audio deleted successfully' }, { status: 200 })
    } catch (error) {
      console.error('Error deleting audio:', error)
      return NextResponse.json({ error: 'Failed to delete audio' }, { status: 500 })
    }
  }