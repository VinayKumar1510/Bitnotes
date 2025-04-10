import mongoose from 'mongoose'

const AudioSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    filename: { type: String },
    audioUrl: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Audio || mongoose.model('Audio', AudioSchema, 'audio_app')
