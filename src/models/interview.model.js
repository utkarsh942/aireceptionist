import mongoose from "mongoose"

const interviewSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  role: {
    type: String
  },

  questions: [
    {
      question: String,
      answer: String,
      feedback: String,
      score: Number
    }
  ],

  currentQuestion: {
    type: String
  },

  status: {
    type: String,
    default: "active"
  }

},
{ timestamps: true }
)

export default mongoose.model("Interview", interviewSchema)