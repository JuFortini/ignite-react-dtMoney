import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-weight: 400;
    font-size: 1rem;
    
    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--green);
    border: none;
    border-radius: 0.25rem;
    color: var(--white);
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e62e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    
  display: flex;
  justify-content: center;
  align-items: center;
    
  background: ${(props) => props.isActive
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'
  };

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;