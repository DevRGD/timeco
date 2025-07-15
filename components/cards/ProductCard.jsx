'use client';
import Link from 'next/link';
import Badge from '../ui/Badge';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({ product, className = '' }) {
  const { title, description, price, image, badge, slug, discount = 0 } = product;
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-sm bg-background text-foreground shadow transition hover:shadow-lg min-h-[480px] ${className}`}
    >
      {/* Badge (Top-Right) */}
      {badge && <Badge badge={badge} />}

      <Link href={product?.href} className="flex flex-col flex-grow">
        {/* Image */}
        <div className="relative aspect-[4/5] w-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="h-full w-full bg-muted" />
          )}
        </div>

        {/* Info */}
        <div
          className="flex flex-col justify-between p-4 h-full backdrop-blur-sm"
          style={{ backgroundColor: 'var(--card-footer)' }}
        >
          <div>
            <h3 className="flex items-center justify-between font-medium">
              <span>{title}</span>
              <span className="flex items-center text-yellow-500 text-xs font-semibold">
                <Star size={14} className="mr-0.5" />
                4.5
              </span>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

            <div className="mt-2 flex items-center gap-2">
              <p className="text-lg font-bold text-foreground">₹{discountedPrice.toFixed(0)}</p>
              {discount > 0 && <p className="text-sm line-through text-muted-foreground">₹{price}</p>}
            </div>
          </div>
        </div>
      </Link>

      {/* Buttons - full width */}
      <div className="mt-auto flex border-t border-border" style={{ backgroundColor: 'var(--card-footer)' }}>
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-1/2 py-2 flex items-center justify-center gap-1 border-r border-border text-sm hover:bg-muted transition"
        >
          <Heart size={16} className="text-red-500" />
          Wishlist
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-1/2 py-2 flex items-center justify-center gap-1 text-sm hover:bg-muted transition"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
