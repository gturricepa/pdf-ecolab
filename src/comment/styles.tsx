import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h3 {
    margin: 0;
    color: #414141;
    display: flex;
    align-items: center;
    margin-top: 1.1rem;
    font-weight: 500;
    font-size: 1rem;
  }
  span {
    margin-top: 0.3rem;
    font-size: 0.7rem;
    text-align: justify;
    color: #414141;
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
