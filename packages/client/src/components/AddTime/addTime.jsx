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

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EditButton = styled.div`
  width: 415px;
  background-color: #36aa68;
  height: 92px;
  display: flex;
  font-size: 80px;
  font-family: Jost, sans-serif;
  flex-direction: column;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  align-items: center;
  justify-content: center;

  text-align: center;
  border-radius: 15px;

  :hover {
    background-color: #2a8953;
  }
`;
export const DayField = styled.div`
  width: 415px;
  background-color: #4a4a4a;
  height: 445px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
`;

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

export const DotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  position: absolute;
  margin-top: 920px;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;
export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
`;

export const Title = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 120px;
  margin-top: -35px;
  margin-bottom: -20px;
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

export const CardText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  margin-top: 10px;
  margin-left: -290px;
  font-size: 40px;
  margin-bottom: 20px;
  opacity: 0.48;
`;

export const YearSmallText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 40px;
  position: absolute;
  opacity: 0.48;
  margin-top: -380px;
  margin-left: -300px;
`;

export const SetToday = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 40px;
  position: absolute;
  opacity: 0.48;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.3;
  }
`;
export const SecOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 224px;
  width: 918px;
`;

export const SecTwo = styled.div`

  height: 326px;
  width: 918px;
`;

export const SecThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 96px;
  width: 918px;
`;

export const DayMonth = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 120px;
  margin-bottom: ${(props) => props.mb};
`;
export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 345px;
  position: absolute;
  z-index: 10;
  margin-left: 60px;
`;
export const InputText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  opacity: 0.6;
  font-size: 40px;
`;
export const ChangeWrapper = styled.div`
  width: 1360px;
  height: 146px;
  border-radius: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
`;
export const ChangeInner = styled.div`
  width: 1338px;
  height: 119px;
  background-color: transparent;
  border-radius: 15px;
  display: flex;
  border-style: solid;
  border-color: #707070;
  border-width: 5px;
  justify-content: center;
  align-items: center;
`;

export const TimeText = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 80px;
`;
export const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const OuterCircle = styled.div`
  width: 177px;
  height: 177px;
  border-width: 14px;
  border-color: darkcyan;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: transparent;
`;
export const BottomWrapper = styled.div`
  width: 1414px;
  height: 501px;
  background-color: #4a4a4a;
  border-radius: 15px;
  margin-top: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InputTime = styled.input`
  width: 212px;
  height: 224px;
  border: none;
  border-radius: 15px;
  font-family: Jost, sans-serif;
  font-size: 120px;
  color: white;
  padding-top: 20px;
  padding-left: 10px;
  caret-color: transparent;
  display: flex;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  transition: 0.3s;
  align-items: center;
  background-color: #272727;

  :focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.26);
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.26);
    transform: scale(1.01);
  }
`;
export const TimeStat = styled.div`
  width: 445px;
  height: 224px;
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
`;
export const InnerCircle = styled.div`
  width: 60px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
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

export const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 400px;
  width: 415px;
  margin-top: -75px;
  margin-bottom: 80px;
  justify-content: space-between;
`;
export const XYWrapper = styled.div`
  width: 887px;
  height: 273px;
  border-radius: 15px;
  background-color: #272727;
`;
export const XYWrapper1 = styled.div`
  width: 445px;
  height: 273px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #272727;
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

export const WrapperRight = styled.div`
  width: 958px;
  height: 727px;
  background-color: #4a4a4a;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const SearchInput = styled.input`
  width: 445px;
  height: 96px;
  background-color: #272727;
  border-radius: 15px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 40px;
  color: #a8a8a8;

  font-family: Jost, sans-serif;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #a8a8a8;
  }
`;
export const AddButton = styled.div`
  width: 445px;
  height: 96px;
  background-color: #36aa68;
  border-radius: 15px;
  font-family: Jost, sans-serif;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #1b6039;
  }
`;
export const SelectProject = styled.div`
  width: 100%;
  height: 326px;
  background-color: #272727;
  border-radius: 15px;
  display: flex;
  padding: 20px;

  flex-direction: column;
  overflow-y: scroll;

  /* width */

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #4a4a4a;
  }
`;
export const EasyRow = styled.div`

  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;


`;

export const ProjectOuterShell = styled.div`
  width: 100%;
  min-height: 75px;
  background-color: #4a4a4a;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 25px;
  padding-left: 25px;

  border-width: 3px;
  border-color: #36aa68;

  justify-content: space-between;
  margin-bottom: 20px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #474747;

  }


`;

export const ProjectName = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  opacity: 0.7;
  font-size: 28px;
  font-weight: 500;

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
export const ArrowBack1 = styled.img`
  height: 100px;
  width: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(180deg);
  display: ${(props) => props.show};
  margin-left: -750px;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
export const ArrowBack = styled.img`
  height: 100px;
  width: auto;
  position: absolute;
  left: 50%;
  display: ${(props) => props.show};

  top: 50%;
  transform: translate(-50%, -50%);
  margin-left: 890px;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.6;
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

export const InnerWrapper1 = styled.div`
  width: 1411px;
  background-color: transparent;
  height: 727px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  width: 1522px;
  background-color: #272727;
  height: 833px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 33px;
`;
