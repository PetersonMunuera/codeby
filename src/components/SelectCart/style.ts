import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 20px;
  right: 20px;
`;

interface ButtonProps {
  active: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.active ? 'var(--blue)' : 'var(--shape)'};
  color: ${props => props.active ? 'var(--shape)' : 'var(--text)' } ;
  font-weight: 600;
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
`