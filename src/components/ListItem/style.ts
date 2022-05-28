import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: 20px;
  }
  
  img {
    border: 2px solid var(--grey);
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    
    h3 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
      color: var(--grey-dark);
    }
  }
`;