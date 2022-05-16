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

export const CalendarWrapper = styled.div`
  width: 1410px;
  background-color: #4a4a4a;
  height: 601px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;

  border-radius: 15px;
`;

export const SelectorText = styled.div`
  font-family: Jost;
  color: white;
  font-size: 40px;
`;

export const Title = styled.div`
  font-family: Jost;
  color: white;
  font-size: 60px;
`;

export const SelectorWrapper = styled.div`
  width: 1410px;
  height: auto;
  display: flex;
  margin-top: -60px;
  flex-direction: row;

  justify-content: space-between;
`;

export const EditDayWrapper = styled.div`
  width: 1409px;
  height: 601px;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;

export const DayWrapper = styled.div`
  width: 415px;
  height: 445px;
  display: flex;
  flex-direction: column;
  background-color: #4a4a4a;
  align-items: center;
  border-radius: 15px;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
export const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  margin-top: 10px;
  margin-left: -290px;
  font-size: 40px;
  margin-bottom: 20px;
  opacity: 0.48;
`;
export const CardBodyText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  margin-bottom: -70px;
  font-size: 120px;
`;

export const EditWrapper1 = styled.div`
  display: flex;
  width: 932px;
  height: 230px;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: transparent;
  justify-content: space-between;
`;

export const Beer = styled.img`
  width: 71px;
  height: 71px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const Add = styled.div`
  display: flex;
  width: 130px;
  height: 184px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 40px;
  border-radius: 15px;
  transition: 0.3s;
  background-color: #36aa68;
  cursor: pointer;

  :hover {
    background-color: #256d44;
  }
`;

export const Vacation = styled.div`
  display: flex;
  width: 175px;
  height: 230px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  transition: 0.3s;
  background-color: #64b1df;
  cursor: pointer;

  :hover {
    background-color: #306f92;
  }
`;

export const TextStandart = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 40px;
`;

export const Arnicard = styled.img`
  margin-bottom: -5px;
`;
export const AssigneeCard = styled.div`
  display: flex;
  width: 156px;
  height: 189px;
  flex-direction: column;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: #4a4a4a;
`;
export const AssigneeWrapper = styled.div`
  display: flex;
  width: 730px;
  height: 230px;
  flex-direction: row;
  border-radius: 15px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #272727;
`;

export const InputNumber1 = styled.input`
  display: flex;
  width: 151px;
  -webkit-appearance: none;
  margin: 0;
  height: 136px;
  border-radius: 15px;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 100px;
  border-style: none;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: 0.3s all;

  outline: none;
  background-color: #4a4a4a;

  ::placeholder {
    font-family: Jost, sans-serif;
    color: white;
    opacity: 0.48;
    text-align: center;
    font-size: 80px;
  }
`;

export const InputNumber = styled.input`
  display: flex;
  width: 151px;
  height: 136px;
  border-radius: 15px;
  -webkit-appearance: none;
  margin: 0;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 100px;
  border-style: none;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: 0.3s all;

  outline: none;
  background-color: #4a4a4a;

  ::placeholder {
    font-family: Jost, sans-serif;
    color: white;
    opacity: 0.48;
    text-align: center;
    font-size: 80px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: -20px;
  justify-content: space-around;
  flex-direction: row;
`;

export const RightCardTappo = styled.div`
  width: 967px;
  height: 599px;
  display: flex;
  flex-direction: column;
  background-color: #4a4a4a;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
`;

export const SaveButton = styled.div`
  width: 415px;
  height: 124px;
  font-family: Jost, sans-serif;
  color: white;
  font-size: 80px;
  font-weight: 300;
  display: flex;
  line-height: 110px;
  justify-content: center;
  background-color: #36aa68;
  border-radius: 15px;
  cursor: pointer;

  transition: 0.3s;

  :hover {
    background-color: #236f45;
  }
`;

export const Selector = styled.div`
  width: 257px;
  height: 73px;
  background-color: #4a4a4a;
  display: flex;
  border-radius: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;

  justify-content: space-between;
`;

export const Button = styled.div`
  width: 45px;
  height: 51px;
  background-color: #272727;
  cursor: pointer;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 9px;

  :hover {
    background-color: #171616;
  }
`;

export const Arrow = styled.img`
  width: 17px;
  height: 17px;
  transform: ${(props) => props.rotate};
`;

export const GridItem = styled.div`
  width: 117px;
  height: 120px;
  border-radius: 11px;
  font-family: Jost;
  font-size: 60px;
  color: white;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background-color: #272727;
  cursor: pointer;

  :hover {
    background-color: #1c1c1c;
  }
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 23px;
  padding: 20px;
  grid-row-gap: 17px;
  transition: 0.3s;
  margin-top: 15px;
  margin-left: -4px;
  background-color: transparent;
`;

export const InnerWrapper = styled.div`
  width: 1482px;
  background-color: #272727;
  height: 790px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 33px;
`;
