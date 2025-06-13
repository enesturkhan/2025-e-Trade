'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Siparişiniz Alındı!</h1>
        <p className="text-gray-600 mb-8">
          Siparişiniz başarıyla oluşturuldu. Sipariş detaylarını e-posta adresinize gönderdik.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Alışverişe Devam Et
          </Link>
          
          <Link
            href="/orders"
            className="block w-full bg-gray-100 text-gray-800 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Siparişlerimi Görüntüle
          </Link>
        </div>
      </div>
    </div>
  );
} 