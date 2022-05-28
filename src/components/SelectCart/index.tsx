import { Container, Button } from "./style";

interface SelectCartProps {
  activeCart: number;
  handleActiveCart: (id: number) => void;
}

export function SelectCart({ activeCart, handleActiveCart }: SelectCartProps) {
  return (
    <Container>
      <Button active={activeCart === 1} onClick={() => handleActiveCart(1)}>
        Carrinho 1
      </Button>
      <Button active={activeCart === 2} onClick={() => handleActiveCart(2)}>
        Carrinho 2
      </Button>
    </Container>
  );
}
