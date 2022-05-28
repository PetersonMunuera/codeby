import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductFormatted } from "../../interfaces/Product";

import { SelectCart } from "../SelectCart";
import { ListItem } from "../ListItem";
import { Container, ProductList, Sumary, TaxFreeMessage } from "./style";

export function Cart() {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [activeCartId, setActiveCartId] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get(`cart-${activeCartId}.json`);
        const formattedProducts: ProductFormatted[] = response.data.items;
        const totalValue = response.data.value / 100;

        if (formattedProducts) {
          formattedProducts.forEach((product) => {
            product.priceFormatted = formatPrice(product.price / 100);
            product.sellingPriceFormatted = formatPrice(
              product.sellingPrice / 100
            );
          });

          setTotalValue(totalValue);
          setProducts(formattedProducts);
        }
      } catch {
        console.log("Erro ao carregar produtos");
      }
    }

    loadProducts();
  }, [activeCartId]);

  return (
    <>
      <SelectCart activeCart={activeCartId} handleActiveCart={setActiveCartId} />
      <Container>
        <header>
          <h2>Meu carrinho</h2>
        </header>
        <ProductList>
          {products.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </ProductList>
        <Sumary>
          <h2>Total</h2>
          <strong>{formatPrice(totalValue)}</strong>
        </Sumary>
        {totalValue > 10 && (
          <TaxFreeMessage>
            <span>Parabéns, sua compra tem frete grátis !</span>
          </TaxFreeMessage>
        )}
        <footer>
          <button>Finalizar compra</button>
        </footer>
      </Container>
    </>
  );
}
