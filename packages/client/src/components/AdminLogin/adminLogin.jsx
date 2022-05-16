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
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 182px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 24px;
  border-width: 3px;
  border-color: #36aa68;
  border-style: none;


  transition: 0.3s;
  justify-content: space-between;

  :hover {
    background-color: #333333;
  }
`;

export const ProfileName = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 30px;
  display: flex;
  text-align: center;
  line-height: 2;
  justify-content: center;
  align-content: center;
  height: 60px;
`;

export const LoginHannes = styled.img`
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: #333333;
  }
`;

export const LoginAmme = styled.img``;

export const ZirkonzahnTitle = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  margin-top: 0px;
  font-size: 180px;
  text-align: center;
`;

export const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px 25px;
  grid-template-areas: 
    ". ."
    ". .";
  width: 506px;
  overflow: auto;


  justify-content: space-between;
  margin-top: 80px;
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

export const LoginCardSelected = styled.div`
  color: white;
  background: #4a4a4a;
  width: 300px;
  height: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 33px;

  transition: all 0.2s;
  cursor: not-allowed;
`;
export const UserWrapper = styled.div`
  background: #000;
  width: 860px;
  height: 532px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  border-radius: 33px;

  align-items: center;
`;
export const LogoIMG = styled.img`
  height: 280px;
  margin-top: -50px;
  width: auto;
`;

export const AdminWrapper = styled.div`
  width: 182px;
  height: 200px;
  display: flex;
  border-radius: 24px;
  background-color: darkgray;
  cursor: pointer;
  align-items: center;


`;
export const Admin = styled.img``;
