import { Container, ItemInfo, AmountHandler, AmountButton } from "./style";
import { ProductProps } from "../../interfaces/Product";
import { formatPrice } from "../../util/format";

interface ListItemProps {
  product: ProductProps;
  handleProductAmount: (productId: string, amount: number) => void
}

export function ListItem({ product, handleProductAmount }: ListItemProps) {
  return (
    <Container>
      <img src={product.imageUrl} alt="" />
      <ItemInfo>
        <h3>{product.name}</h3>
        <span>{formatPrice(product.price)}</span>
        <strong>{formatPrice(product.sellingPrice * product.amount)}</strong>
        <AmountHandler>
          <AmountButton allowed={product.amount > 1} onClick={() => handleProductAmount(product.id, product.amount - 1)}>-</AmountButton>
          <strong>{product.amount}</strong>
          <AmountButton allowed={true} onClick={() => handleProductAmount(product.id, product.amount + 1)}>+</AmountButton>
        </AmountHandler>
      </ItemInfo>
    </Container>
  );
}
