import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
`;

export const InnerWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ZirkonzahnTitle = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  margin-top: 0px;
  font-size: 180px;
  text-align: center;
`;

export const ChooseLogin = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 45px;
  width: 650px;
  margin-top: 10px;
  border-style: solid;
  border-bottom-width: 2px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;

  text-align: center;
`;

export const Role = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 35px;
  font-weight: 400;
  margin-top: 50px;
`;

export const LoginCardWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 650px;
  flex-direction: row;
  margin-top: 50px;
`;
export const LoginCard = styled.div`
  color: white;
  background: black;
  width: 300px;
  height: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 33px;

  transition: all 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;
export const LogoIMG = styled.img`
  height: 280px;
  margin-top: -50px;
  width: auto;
`;

export const Admin = styled.img``;
