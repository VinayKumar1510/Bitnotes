import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Note || mongoose.model('Note', NoteSchema)
