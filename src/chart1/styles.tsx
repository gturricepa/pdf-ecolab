import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  justify-content: space-between; /* Para distribuir o título e o gráfico */
  align-items: center; /* Para centralizar verticalmente */
  margin-top: 0.5rem;
  width: 100%; /* Para ocupar toda a largura do container */
  text {
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
  }
  h3 {
    margin: 0;
    color: #414141;
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    flex-grow: 1; /* Para permitir que o gráfico ocupe o espaço restante */
  }
`;

export const Detail = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  background-color: #414141;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin-right: 1rem;
`;
