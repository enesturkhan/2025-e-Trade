'use client';

import Link from 'next/link';
import useCart from '@/app/store/useCart';
import { theme } from '@/app/styles/theme';

export default function Navbar() {
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  return (
    <nav style={{ 
      backgroundColor: theme.colors.deep,
      color: theme.colors.light,
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ve ana sayfa linki */}
        <Link 
          href="/" 
          style={{ 
            color: theme.colors.light,
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          e-Trade
        </Link>

        {/* Navigasyon linkleri */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/products"
            style={{ 
              color: theme.colors.sage,
              transition: 'color 0.2s'
            }}
            className="hover:text-light"
          >
            Ürünler
          </Link>

          {/* Sepet butonu */}
          <button
            className="relative"
            style={{ 
              backgroundColor: theme.colors.ocean,
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              color: theme.colors.light,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>Sepet</span>
            {cartItemCount > 0 && (
              <span
                style={{
                  backgroundColor: theme.colors.sage,
                  color: theme.colors.deep,
                  borderRadius: '9999px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 