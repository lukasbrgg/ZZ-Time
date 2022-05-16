import styled from "styled-components";
import React from "react";

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

export const InnerWrapper = styled.div`
  width: 1482px;
  background-color: #272727;
  height: 790px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 33px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 1420px;
  height: 600px;
  justify-content: space-between;
`;

export const EditProfile = styled.div`
  font-size: 120px;
  font-family: Jost, sans-serif;
  color: white;
`;

export const ChangePassword = styled.div`
  font-size: 40px;
  font-family: Jost, sans-serif;
  color: #a8a8a8;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-between;
  height: 97px;
  width: 1420px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 530px;
  width: 813px;
`;

export const SaveButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #36aa68;
  border-radius: 15px;
  padding-bottom: 10px;
  height: 108px;
  width: 813px;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  font-family: Jost, sans-serif;
  font-size: 80px;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.6;
  }
`;
export const InputItem = styled.input`
  height: 108px;
  width: 813px;
  border-style: none;
  font-size: 40px;
  font-family: Jost, sans-serif;
  color: #a8a8a8;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: #272727;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);

  :focus {
    outline: none;
  }
`;

export const ChangePictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 602px;
  width: 530px;
  justify-content: space-between;
`;

export const ChangePwWrapper = styled.div`
  height: 700px;
  width: 606px;
  border-radius: 15px;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  background-color: rgba(173, 173, 173, 0.5);
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 10;
`;
export const TitleWrapper = styled.div`
  color: white;
  font-size: 80px;
  font-family: Jost, sans-serif;
  width: 315px;
  margin-left: 23px;
  margin-top: 25px;
  margin-bottom: -25px;
`;
export const InnerWrapperPW = styled.div`
  width: 556px;
  height: 390px;
  display: flex;
  flex-direction: column;
  margin-left: 23px;
  margin-top: 55px;
  justify-content: space-between;
`;

export const SavePswd = styled.div`
  color: white;
  font-size: 80px;
  font-family: Jost, sans-serif;
  width: 556px;
  height: 134px;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  background-color: #36aa68;
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #277d49;
  }
`;

export const InputPassword = styled.input`
  color: rgba(255, 255, 255, 0.6);
  font-size: 40px;
  font-family: Jost, sans-serif;
  width: 556px;
  box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.62);
  height: 87px;
  border-style: none;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #272727;
  border-radius: 15px;

  :focus {
    outline: none;
  }
`;
export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 487px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 530px;
  border-radius: 15px;
  background-color: #4a4a4a;
`;
export const ChangeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Jost, sans-serif;
  font-size: 40px;
  color: white;
  transition: 0.3s;
  height: 95px;
  width: 530px;
  cursor: pointer;
  border-radius: 15px;
  background-color: #36aa68;

  :hover {
    opacity: 0.6;
  }
`;
export const ChangeDataWrapper = styled.div`
  border-radius: 15px;
  background-color: #4a4a4a;
  height: 602px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 866px;
`;

export const PB = styled.img`
  border-radius: 15px;
  height: 339px;
  width: 490px;
`;

export const Name = styled.div`
  font-family: Jost, sans-serif;
  color: white;
  font-size: 80px;
`;
