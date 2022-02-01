import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e62e4d;
    --white: #ffffff;
    --light-blue: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93,75%;
    }

    @media (max-width: 720px) {
      font-size: 87,5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 36rem;
    max-width: 576px;

    position: relative;
    
    padding: 3rem;
    border-radius: 0.25rem;
    background: var(--background);
  }

  .react-close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    
    border: none;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`