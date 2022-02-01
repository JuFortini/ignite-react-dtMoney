import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  height: 13rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  justify-content: space-between;

  button {
    padding: 0 2rem;
    border: none;
    border-radius: 0.25rem;
    
    background: var(--light-blue);
    color: var(--white);
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;