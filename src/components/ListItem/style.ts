import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: 20px;
  }
  
  img {
    border: 2px solid var(--grey);
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ItemInfo = styled.div`
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  h3 {
    font-size: 14px;
  }

  span {
    font-size: 12px;
    color: var(--grey-dark);
  }
`;

export const AmountHandler = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  
  strong {
    text-align: center;
    width: 20px;
    margin: 0 10px;
  }
`;

interface AmountButtonProps {
  allowed: boolean
}

export const AmountButton = styled.button<AmountButtonProps>`
  border: none;
  background-color: var(--grey);
  font-weight: 600;
  font-size: 20px;

  width: 50px;
  border-radius: 20px;

  transition: linear .1s background-color;
  opacity: ${props => props.allowed ? 1 : 0.5};
  cursor: ${props => props.allowed ? 'pointer' : 'not-allowed'};

  &:hover {
    background-color: ${darken(0.06, '#d1d1d1')};
  }
`;