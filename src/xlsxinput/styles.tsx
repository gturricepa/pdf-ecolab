import styled from "styled-components";

export const Holder = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
  margin-right: 5;
`;

export const SelectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Limita a largura do painel */
  /* background-color: pink; */
`;

export const PdfSimulation = styled.div`
  width: 794px; /* 210mm em ~96 DPI */
  height: 1123px; /* 297mm em ~96 DPI */
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 555;
  box-sizing: border-box;
  overflow: hidden;

  .logo-container {
    align-self: flex-start;
  }

  img {
    padding: 0;
    margin: 0;
    width: 100px;
  }

  h3 {
    text-align: center;
    margin: 0;
    color: #414141;
    font-weight: 500;
    padding: 0;
    margin-bottom: 0.7rem;
  }

  .pdf-content {
    padding: 5px;
  }
`;

export const Loader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  .loader {
    width: 50px;
    aspect-ratio: 1;
    --c: no-repeat radial-gradient(farthest-side, #514b82 92%, #0000);
    background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
      var(--c) 0 50%;
    background-size: 10px 10px;
    animation: l18 1s infinite;
    position: relative;
  }
  .loader::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: 3px;
    background: repeating-conic-gradient(#0000 0 35deg, #4f4b82 0 90deg);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 3px),
      #000 0
    );
    border-radius: 50%;
  }
  @keyframes l18 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export const PdfSimulationHorizontal = styled.div`
  height: 850px; /* 210mm em ~96 DPI */
  width: 1200px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 555;
  box-sizing: border-box;
  overflow: hidden;
`;

export const PdfSimulation2 = styled.div`
  width: 794px; /* 210mm em ~96 DPI */
  height: 1123px; /* 297mm em ~96 DPI */
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 555;
  box-sizing: border-box;
  overflow: hidden;

  .logo-container {
    align-self: flex-start;
  }

  img {
    padding: 0;
    margin: 0;
    width: 100px;
  }

  h3 {
    text-align: center;
    margin: 0;
    color: #414141;
    font-weight: 500;
    padding: 0;
  }

  .pdf-content {
    padding: 5px;
  }
`;
