import mongoose from 'mongoose';

const ratingReviewSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, trim: true },
  },
  { timestamps: true },
);

export default mongoose.models.RatingReview || mongoose.model('RatingReview', ratingReviewSchema);
