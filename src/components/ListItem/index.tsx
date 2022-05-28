import { Container } from "./style";
import { ProductFormatted } from '../../interfaces/Product'

interface ListItemProps {
  product: ProductFormatted
}

export function ListItem({ product }: ListItemProps) {
  return (
    <Container>
      <img src={product.imageUrl} alt="" />
      <div>
        <h3>{product.name}</h3>
        <span>{product.priceFormatted}</span>
        <strong>{product.sellingPriceFormatted}</strong>
      </div>
    </Container>
  );
}
