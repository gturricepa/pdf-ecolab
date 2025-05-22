import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h3 {
    margin: 0;
    font-size: 1rem;
    color: #414141;
    display: flex;
    align-items: center;
    margin-top: 1.1rem;
    font-weight: 500;
  }
`;
export const Detail = styled.div`
  display: flex;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #414141;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
`;

export const SectionHolder = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    width: 100%;
    margin: 0;
    background-color: #414141;
    border-radius: 10px;
  }

  span {
    display: flex;
    background-color: #414141;
    color: white;
    padding: 0;
    margin: 0;
    width: 100%;
    font-size: 0.7rem;
    justify-content: center;
    border-radius: 10px;
    height: 2.3rem;
    align-items: center;
  }

  p {
    background-color: white;
    border: 1px solid #414141;
    border-radius: 10px;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.3rem;
    font-size: 0.8rem;
  }
`;
