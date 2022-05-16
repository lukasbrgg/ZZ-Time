import styled, {keyframes} from "styled-components";

export const fadeIn = keyframes`
  0% {
    transform: translateY(1000px);
  }
  100% {
    transform: translateX(0);
  }`;

export const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }`;

export const OuterWrapper = styled.div`
  width: 1747px;
  background-color: transparent;
  height: 1010px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 33px;
`;

export const InnerWrapper = styled.div`
  width: 1323px;
  background-color: transparent;
  height: 824px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;

  border-radius: 33px;
`;

export const LeftCardWrapper = styled.div`
  width: 417px;
  background-color: transparent;
  height: 824px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 33px;
`;

export const RightCardWrapper = styled.div`
  width: 884px;
  background-color: #272727;
  height: 824px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;

export const RighInnerWrapper = styled.div`
  width: 834px;
  background-color: transparent;

  height: 769px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 33px;
`;

export const RightInners = styled.div`
  width: 834px;
  background-color: transparent;

  height: 370px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 15px;
`;

export const InnerCardTop = styled.div`
  width: 834px;
  background-color: #4a4a4a;

  animation: ${fadeInTop};
  z-index: 0;
  animation-duration: 1.55s;

  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
`;

export const Machine = styled.img``;
export const Title1 = styled.div`
  font-family: Jost, sans-serif;

  color: white;

  margin-top: 50px;
  font-size: 40px;
  display: flex;
`;

export const Number = styled.div`
  font-family: Jost, sans-serif;

  color: white;
  margin-top: 30px;
  font-size: 130px;
  font-weight: 400;
  display: flex;
`;

export const AssigneeWrapper1 = styled.div`
  width: 67%;
  height: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-top: -15px;
  margin-left: -20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const AssigneeWrapper = styled.div`
  width: 80%;
  height: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
  flex-direction: row;
`;

export const PB = styled.img`
  width: 90%;
  height: auto;
  display: flex;
  margin-bottom: -20px;
  margin-top: 7px;
  justify-content: center;
`;

export const ImageBox = styled.div`
  height: 218px;
  cursor: pointer;
  width: 174px;
  align-items: center;
  background-color: #272727;
  -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  :hover {
    -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.26);
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.26);
  }
`;

export const Title3 = styled.div`
  font-family: Jost, sans-serif;
  margin-top: 15px;
  color: white;
  font-size: 40px;
  display: flex;
`;
export const Title2 = styled.div`
  font-family: Jost, sans-serif;

  color: white;
  margin-top: -70px;
  font-size: 40px;
  display: flex;
`;

export const Title = styled.div`
  font-family: Jost, sans-serif;

  color: white;
  position: absolute;
  top: 5rem;
  left: 37.5rem;

  font-size: 40px;
  display: flex;
`;

export const Progress = styled.div`
  margin-top: 30px;
`;


export const RightInnerCards = styled.div`
  width: 402px;
  background-color: #4a4a4a;

  animation: ${fadeIn};
  animation-duration: 1s;

  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const RightInnerCards1 = styled.div`
  width: 402px;
  background-color: #4a4a4a;

  animation: ${fadeIn};
  animation-duration: 2s;

  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
export const LeftCardss = styled.div`
  width: 417px;
  background-color: #272727;
  box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  height: 391px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border-style: solid;
  border-width: 5px;
  border-color: ${props => props.selectRecent ? '#4a4a4a' : '#272727'};
  border-radius: 33px;

  :hover {
    box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const LeftCards = styled.div`
  width: 417px;
  background-color: #272727;
  box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.15);
  height: 391px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border-style: solid;
  border-width: 5px;
  border-color: ${props => props.selectRecent ? '#4a4a4a' : '#272727'};
  border-radius: 33px;

  :hover {
    box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 3px 37px 2px rgba(0, 0, 0, 0.1);
  }
`;
