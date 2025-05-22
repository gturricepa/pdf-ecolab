import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    padding: 0;
    margin: 0;
    font-weight: 200;
    font-size: 2rem;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2rem;
    margin: 0rem;
    padding: 0rem;
    font-weight: 200;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 200;
  }
  span,
  p {
    margin: 0;
    padding: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
`;
