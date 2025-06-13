'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ödeme işlemleri burada yapılacak
    router.push('/success');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ödeme</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Teslimat Bilgileri</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Ad Soyad</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-posta</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Adres</label>
            <textarea
              required
              className="w-full px-3 py-2 border rounded-md"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Ödeme Bilgileri</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Kart Numarası</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md"
              value={formData.cardNumber}
              onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Son Kullanma Tarihi</label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md"
                value={formData.cvv}
                onChange={(e) => setFormData({...formData, cvv: e.target.value})}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Siparişi Tamamla
        </button>
      </form>
    </div>
  );
} 