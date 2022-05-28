import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  padding-bottom: 20px;
`;

interface ButtonProps {
  active: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.active ? 'var(--blue)' : 'var(--shape)'};
  color: ${props => props.active ? 'var(--shape)' : 'var(--text)' } ;
  font-weight: 600;
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  transition: linear .1s background-color;

  &:hover {
    background: ${props => props.active ? darken(0.06, '#3b74f2') : darken(0.06, '#fff')};
  }
`;