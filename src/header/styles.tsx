import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SectionHolder = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  background-color: #3b6c67;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  width: 100%;

  p {
    color: white;
    margin: 0;
    padding: 0;
    width: 8.5rem;
    font-size: 0.8rem;
    padding: 0rem;
    white-space: normal; /* Permite quebra de linha */
    word-wrap: break-word; /* Força quebra dentro da palavra se necessário */
    overflow-wrap: break-word; /* Compatível com navegadores modernos */
  }

  div {
    background-color: white;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    padding: 0.5rem;
    width: 90%;
    height: 2rem;
    border: 1px solid #3b6c67;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;

export const Section2 = styled.div`
  flex: 1;
  display: flex;
  background-color: #3b6c67;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 90%;

  p {
    color: white;
    margin: 0;
    padding: 0;
    width: 8.5rem;
    font-size: 0.8rem;
    padding: 0.3rem;
    white-space: normal; /* Permite quebra de linha */
    word-wrap: break-word; /* Força quebra dentro da palavra se necessário */
    overflow-wrap: break-word; /* Compatível com navegadores modernos */
  }

  div {
    background-color: white;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    padding: 0.5rem;
    width: 90%;
    height: 2rem;
    border: 1px solid #3b6c67;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  strong {
    font-weight: bold;
  }
`;
