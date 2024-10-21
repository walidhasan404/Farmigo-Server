export interface Product {
    _id: string;
    product_name: string;
    price: number;
    oldPrice?: number;
    images: string;
    category: string;
    description: string;
    rating: number;
    stock: number;
    quantity: number;
  }