import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`;
export const Detail = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #414141;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin-right: 0.7rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Values = styled.div`
  display: flex;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Left = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    font-size: 0.8rem;
    padding: 0;
    color: #414141;
    display: flex;
    justify-self: flex-start;
    align-self: flex-start;
    align-content: flex-start;
    text-align: left;
    margin: 0;
    justify-content: center;
  }
`;

export const Detail2 = styled.div`
  width: 0.375rem; /* 6px */
  height: 0.375rem;
  background-color: #414141;
  border-radius: 50%;
  margin: 0;
  margin-right: 0.2rem;
  flex-shrink: 0; /* para garantir que não encolha */
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem; /* espaçamento entre comentários */
`;
