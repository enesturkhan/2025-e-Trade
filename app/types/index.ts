// Ürün tipi
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Sepet öğesi tipi (Product'ı extend eder ve quantity ekler)
export interface CartItem extends Product {
  quantity: number;
} 