import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductProps } from "../../interfaces/Product";

import { SelectCart } from "../SelectCart";
import { ListItem } from "../ListItem";
import { Container, ProductList, Sumary, TaxFreeMessage } from "./style";

export function Cart() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [activeCartId, setActiveCartId] = useState(1);

  function updateProductAmount(productId: string, amount: number) {
    if (amount <= 0) return;

    const newProducts = [...products];
    let newValue = 0;
    
    newProducts.forEach((product) => {
      if (product.id === productId) {
        product.amount = amount;
      }
      newValue += product.sellingPrice * product.amount
    });
    
    setTotalValue(newValue);
    setProducts(newProducts);
  }
  
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get(`cart-${activeCartId}.json`);
        const formattedProducts: ProductProps[] = response.data.items;
        const totalValue = response.data.value / 100;

        formattedProducts.forEach((product) => {
          product.price = product.price / 100;
          product.sellingPrice = product.sellingPrice / 100;
          product.amount = 1;
        });

        setTotalValue(totalValue);
        setProducts(formattedProducts);
      } catch {
        console.log("Erro ao carregar produtos");
      }
    }

    loadProducts();
  }, [activeCartId]);

  return (
    <>
      <SelectCart
        activeCart={activeCartId}
        handleActiveCart={setActiveCartId}
      />
      <Container>
        <header>
          <h2>Meu carrinho</h2>
        </header>
        <ProductList>
          {products.map((product) => (
            <ListItem
              key={product.id}
              product={product}
              handleProductAmount={updateProductAmount}
            />
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
