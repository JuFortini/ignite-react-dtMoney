import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    text-align: left;
    padding-left: 2rem;
  }

  tbody {
    td {
      background: var(--white);
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.25rem;

      &:nth-last-child(-n+2) {
        color: var(--text-body)
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;