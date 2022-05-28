export interface ProductProps {
  id: string
  imageUrl: string
  name: string
  price: number
  sellingPrice: number
};

export interface ProductFormatted extends ProductProps {
  priceFormatted: string;
  sellingPriceFormatted: string;
}