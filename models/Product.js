import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    badge: { type: String, enum: ['New', 'Popular', 'Trending', 'Sale', 'Exclusive', null] },
    category: {
      type: String,
      enum: ['Men', 'Women', 'Unisex', 'Limited', 'Luxury', 'Smart', 'Classic'],
      default: 'Unisex',
    },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    discount: { type: Number, min: 0, max: 100, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Product || mongoose.model('Product', productSchema);
