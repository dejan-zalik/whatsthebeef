import { Schema, model, models } from 'mongoose';

const ProblemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    upvotes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Problem = models.Problem || model('Problem', ProblemSchema);

export default Problem;
