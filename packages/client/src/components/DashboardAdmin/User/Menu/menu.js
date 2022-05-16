import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 145px;
  background-color: black;
  height: 1010px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;

export const Page = styled.div`
  width: 100vw;
  background-color: transparent;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; ;
`;

export const Item = styled.img`
  width: 100px;
  cursor: pointer;
  margin-left: -20px;
  height: auto;
  transition: 0.3s;

  :hover {
    filter: invert(10%) sepia(0%) saturate(23%) hue-rotate(161deg)
      brightness(30%) contrast(86%);
  }
`;

export const Core = styled.div`
  height: 1010px;
  width: 1749px;
  border-radius: 33px;
  background-color: #333333;
  margin-left: 12px;
`;
export const ItemOuter = styled.div`
  height: 125px;
  width: 160px;
  margin-left: 15px;
  display: flex;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: width 1s ease-in-out;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: #333333;
`;

export const ItemOuter1 = styled.div`
  height: 125px;
  width: 100px;
  margin-left: 15px;

  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  justify-content: center;
  background-color: transparent;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.div`
  height: 150px;
  width: 150px;
  background-color: #36aa68;
  border-radius: 75px;
  font-family: Jost, sans-serif;
  font-weight: 100;
  color: white;
  cursor: pointer;
  box-shadow: -1px 0px 29px -7px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: -1px 0px 29px -7px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: -1px 0px 29px -7px rgba(0, 0, 0, 0.38);
  font-size: 150px;
  display: flex;
  justify-content: center;
  transition: 0.3s;

  align-items: center;

  :hover {
    background-color: #257146;
  }
`;

export const ButtonText = styled.div`
  font-family: Jost, sans-serif;
  font-weight: 100;
  color: white;

  font-size: 150px;
  display: flex;
  margin-top: -20px;

  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: flex-end;
  height: auto;
  top: 54rem;
  left: 114rem; ;
`;
