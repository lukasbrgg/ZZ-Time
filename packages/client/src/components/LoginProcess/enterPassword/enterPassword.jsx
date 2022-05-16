import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
`;

export const Title = styled.div`
  font-family: Jost, sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
  display: flex;
`;

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Placeholder = styled.div`
  width: 135px;
  height: 50px;
`;

export const PassworOuterWrapper = styled.div`
  width: 1920px;
  height: 1080px;

  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const PasswordWrapper = styled.div`
  width: 477px;
  height: 582px;

  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Greetings = styled.div`
  width: 100%;
  height: auto;
  font-size: 40px;
  color: white;
  margin-bottom: 30px;
  text-align: center;
  font-family: Jost, sans-serif;
`;

export const Inputfield = styled.input`
  background-color: #333333;
  width: 390px;
  height: 58px;
  margin: auto;
  border-radius: 12px;
  font-family: Jost, sans-serif;
  color: rgba(255, 255, 255, 0.44);
  font-size: 20px;
  padding-left: 20px;
  transition: background-color 0.2s ease-out;

  cursor: text;
  margin-top: -15px;
  border-style: ${props => props.borderstyle};
  border-width: 3px;
  border-color: #e68383;

  :hover {
    background-color: #2a2929;
  }

  :focus {
    outline: none;
    background-color: #2a2929;
  }
`;

export const Login = styled.div`
  background-color: #36aa68;
  width: 390px;
  height: 58px;
  margin: auto;
  margin-top: -30px;
  border-radius: 12px;
  font-family: Jost, sans-serif;
  color: rgba(255, 255, 255);
  font-size: 40px;
  text-align: center;
  border-style: none;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: #27794c;
  }
`;

export const InputWrapper = styled.div`
  width: 477px;
  height: 452px;
  background-color: black;
  display: flex;
  flex-direction: column;

  border-radius: 33px;
  z-index: 1;
  position: fixed;
  align-items: flex-start;
  padding-top: 120px;
  margin-top: 130px;
`;
export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: auto;
  margin-top: 20px;
  align-items: start;
  justify-content: space-between;
`;

export const Picture = styled.img`
  height: 200px;
  width: 181px;
  z-index: 2;
  background-color: white;
  position: fixed;
  display: flex;
  margin-top: -191px;
  margin-left: 145px;
  -webkit-box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.14);
  border-radius: 24px;
`;

export const BackArrow = styled.img`
  margin-left: 50px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 15px;
  transition: background-color 0.3s ease-out;

  cursor: pointer;

  :hover {
    background-color: #272727;
  }
`;
