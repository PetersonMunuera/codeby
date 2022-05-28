import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--shape);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 2px 20px rgba(0,0,0,0.2);

  header {
    text-align: center;
    padding: 10px;
  }

  footer {
    text-align: center;
    padding: 20px;
    border-top: 2px solid var(--grey);

    button {
      width: 100%;
      background-color: var(--blue);
      padding: 15px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 18px;
      color: var(--shape);
    }
  }
`;

export const ProductList = styled.div`
  padding: 20px;
  border-top: 2px solid var(--grey);
  border-bottom: 2px solid var(--grey);
`;

export const Sumary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  strong {
    font-size: 22px;
  }
`;

export const TaxFreeMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  span {
    background-color: var(--green-light);
    color: var(--green);
    padding: 5px 15px;
    border-radius: 40px;
    font-weight: 600;
  }  
`;