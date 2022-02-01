import styled from "styled-components";

export const Container = styled.div`
  margin-top: -6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  div {
    background: var(--white);
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--text-title);


    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &:last-child {
      background: var(--green);
      color: var(--white);
    }
  }
`;