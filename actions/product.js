'use server';

import Product, { ProductZ } from '@/models/Product';
import { getUser } from './auth';

const ProductUpdateSchema = ProductZ.partial();

const requireAdmin = async () => {
  const user = await getUser();
  if (!user || user.role !== 'admin') throw new Error('Not authorised');
};

export async function listProducts() {
  return Product.find().lean();
}

export async function createProduct(_, formData) {
  await requireAdmin();

  const parsed = ProductZ.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
    badge: formData.get('badge') || null,
  });
  if (!parsed.success) throw parsed.error;

  return Product.create(parsed.data);
}

export async function updateProduct({ id }, formData) {
  await requireAdmin();

  const parsed = ProductUpdateSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
    badge: formData.get('badge') || null,
  });
  if (!parsed.success) throw parsed.error;

  return Product.findByIdAndUpdate(id, parsed.data, { new: true });
}

export async function deleteProduct({ id }) {
  await requireAdmin();
  await Product.findByIdAndDelete(id);
}
