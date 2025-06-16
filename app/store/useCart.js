import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      // Sepete ürün ekleme
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);

        if (existingItem) {
          // Eğer ürün zaten sepette varsa miktarını artır
          set({
            items: currentItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: get().total + product.price
          });
        } else {
          // Yeni ürün ekle
          set({
            items: [...currentItems, { ...product, quantity: 1 }],
            total: get().total + product.price
          });
        }
      },

      // Sepetten ürün çıkarma
      removeItem: (productId) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find(item => item.id === productId);

        if (itemToRemove) {
          set({
            items: currentItems.filter(item => item.id !== productId),
            total: get().total - (itemToRemove.price * itemToRemove.quantity)
          });
        }
      },

      // Ürün miktarını güncelleme
      updateQuantity: (productId, quantity) => {
        const currentItems = get().items;
        const item = currentItems.find(item => item.id === productId);

        if (item) {
          const quantityDiff = quantity - item.quantity;
          set({
            items: currentItems.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            ),
            total: get().total + (item.price * quantityDiff)
          });
        }
      },

      // Sepeti temizleme
      clearCart: () => {
        set({ items: [], total: 0 });
      },

      // Sepetteki ürün sayısını hesaplama
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage', // localStorage'da saklanacak isim
      getStorage: () => localStorage // Tarayıcı localStorage'ını kullan
    }
  )
);

export default useCart; 