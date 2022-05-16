import styled, {keyframes} from "styled-components";
import React from "react";

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

export const Upload = styled.div`
  width: 100%;
  height: 100%;
`;
export const UploadText = styled.div`
  font-family: Jost, sans-serif;

  color: white;

  font-size: 40px;
`;

export const SaveButton = styled.div`
  height: 103px;
  width: 598px;
  border-radius: 15px;
  background-color: #36aa68;
  display: flex;
  font-family: Jost, sans-serif;
  font-size: 80px;
  justify-content: center;
  transition: 0.3s;
  color: white;
  text-align: center;
  vertical-align: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #267449;
  }
`;
export const EstimateText = styled.div`
  width: 137px;
  font-family: Jost, sans-serif;
  font-size: 40px;
  transition: 0.3s;
  color: white;
`;

export const UploadImage = styled.img`
  width: 142px;
  margin-top: 40px;
  height: 142px;
`;

export const AddWrapper = styled.div`
  width: 1299px;
  height: 588px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const WrapperInput = styled.div`
  width: 602px;
  height: 332px;
  -webkit-box-shadow: 3px 0px 14px 1px rgba(0, 0, 0, 0.16);
  box-shadow: 3px 0px 14px 1px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 30px;
  align-items: center;
  background-color: #272727;
`;

export const InputNumber1 = styled.input`
  display: flex;
  width: 100%;
  -webkit-appearance: none;
  margin: 0;
  height: 100%;
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
export const WrapperHours = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 15px;
  background-color: #4a4a4a;
`;

export const WrapperRight = styled.div`
  width: 666px;
  height: 588px;
  border-radius: 15px;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  display: flex;
  margin-top: -130px;
  flex-direction: column;
  background-color: #4a4a4a;
`;
export const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px 25px;
  grid-template-areas: 
    ". ."
    ". ."
    ". .";
  width: 824px;
  margin-right: 20px;
  margin-left: 20px;
  overflow: auto;


  justify-content: space-between;
  margin-top: 20px;
  
`;
export const Field = styled.div`
  height: 324px;
  width: 598px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #4a4a4a;
  cursor: pointer;

  transition: 0.3s;

  :hover {
    background-color: #313030;
  }
`;

export const UploadDocument = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CloseButton = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  margin-top: -400px;
  margin-left: 550px;
  left: 50%;
  transition: 0.3s;
  cursor: pointer;
  
  :hover{
    
    opacity: 0.7;
    
  }

`;
export const ProjectDetailsOuterWrapper = styled.div`
  width: 1100px;
  height: 850px;
  background-color: #4a4a4a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const ProjectDetailsOuterWrapper1 = styled.div`
  width: 1100px;
  height: 550px;
  background-color: #4a4a4a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const InnerWrapperDetails1 = styled.div`
  width: 500px;
  height: 550px;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const InnerWrapperDetails2 = styled.div`
  width: 500px;
  height: 550px;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ImageUP = styled.img`
  height: 142px;
  width: 142px;
  margin-top: 40px;
`;

export const BottomBox = styled.div`
  height: 594px;
  padding: 20px;
  width: 863px;
  border-radius: 15px;
  background-color: #333333;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
export const BottomButton = styled.div`
  height: 128px;
  width: 140px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 15px;
  background-color: #36aa68;
  justify-content: center;
  align-items: center;
  display: flex;

  :hover {
    opacity: 0.4;
  }
`;
export const SaveIMG = styled.img`
  height: 83px;
  width: 83px;
`;
export const SearchUser = styled.input`
  height: 88px;
  width: 438px;
  border-radius: 15px;
  background-color: #333333;
  padding-left: 20px;
  position: absolute;
  margin-left: 425px;
  padding-right: 20px;
  margin-top: -100px;
  font-family: Jost, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 40px;
  border: none;

  :focus {
    outline: none;
  }
`;

export const BottomBoxInner1 = styled.div`
  height: 129px;
  width: 666px;
  border-radius: 15px;
  background-color: #4a4a4a;
  display: flex;
`;
export const BottomBoxInner = styled.div`
  height: 553px;
  width: 824px;
  border-radius: 15px;
  background-color: #4a4a4a;
  display: flex;
`;

export const ButtonImage = styled.img`
  height: 94px;
  width: 94px;
`;

export const AddProjectInner = styled.div`
  height: 455px;
  width: 598px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; ;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: auto;
  width: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: 1650px;
  margin-left: 1650px;
  margin-top: 640px;
`;

export const AddUserBox = styled.div`
  width: 913px;
  height: 857px;
  border-radius: 15px;
  position: absolute;
  z-index: 100;
  left: 55%;
  padding: 25px;
  top: 50%;
  transform: translate(-55%, -50%);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
`;

export const AddUserToProject = styled.div`
  font-family: Jost, sans-serif;
  margin-top: -20px;
  font-size: 80px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.16);
  color: white;
  width: 321px;
`;

export const FlexRow1 = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const Close = styled.img`
  width: 54px;
  height: 54px;
  cursor: pointer;

  transition: 0.3s;

  :hover {
    opacity: 0.5;
  }
`;

export const OuterWrapper = styled.div`
  width: 1747px;
  background-color: transparent;
  height: 1010px;
  opacity: ${(props) => props.overlayOpacity};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 33px;
`;

export const Title = styled.div`
  font-family: Jost, sans-serif;
  font-size: 120px;
  color: white;
`;

export const InnerWrapper = styled.div`
  width: 1482px;
  background-color: #272727;
  height: 790px;
  padding-left: 130px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;

  border-radius: 33px;
`;

export const ProjectWrapper = styled.div`
  width: 1235px;
  height: 312px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
  z-index: 5;
`;

export const ProjectCard = styled.div`
  width: 285px;
  height: 312px;
  display: flex;
  flex-direction: column;
  background-color: #4a4a4a;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 15px;

  :hover {
    box-shadow: 0px 0px 44px 3px rgba(0, 0, 0, 0.26);
    -webkit-box-shadow: 0px 0px 44px 3px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: 0px 0px 44px 3px rgba(0, 0, 0, 0.26);
  }
`;

export const Arrow = styled.img`
  transform: rotateZ(${(props) => props.rotate});
  cursor: pointer;

  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const M2 = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 15px;
`;

export const ArrowWrapper = styled.div`
  width: 1420px;
  height: auto;
  display: flex;
  margin-left: -100px;
  z-index: 1;

  margin-top: -200px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Regulat = styled.div`
  font-family: Jost, sans-serif;
  font-size: 40px;
  color: white;
`;
