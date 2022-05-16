import styled from "styled-components";
import React from "react";

export const OuterWrapper = styled.div`
  width: 1747px;
  background-color: transparent;
  height: 1010px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;
export const InnerWrapper = styled.div`
  width: 1482px;
  background-color: #272727;
  height: 731px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 33px;
`;

export const StyledInput1 = styled.input`
  width: 361px;
  background-color: #272727;
  height: 69px;
  border-radius: 15px;
  padding-left: 20px;
  font-family: Jost, sans-serif;
  color: rgba(255, 255, 255, 0.4);
  font-size: 40px;
  border: none;

  ::placeholder {
    font-family: Jost, sans-serif;
    color: rgba(255, 255, 255, 0.4);
    font-size: 40px;
  }

  :focus {
    outline: none;
  }
`;

export const StyledInput = styled.input`
  width: 361px;
  background-color: #272727;
  height: 69px;
  border-radius: 15px;
  padding-left: 20px;
  font-family: Jost, sans-serif;
  color: rgba(255, 255, 255, 0.4);
  font-size: 40px;
  border: none;

  ::placeholder {
    font-family: Jost, sans-serif;
    color: rgba(255, 255, 255, 0.4);
    font-size: 40px;
  }

  :focus {
    outline: none;
  }
`;

export const BackArrow = styled.img`
  width: 29px;
  height: 29px;
  transform: rotateZ(180deg);
  margin-top: 13px;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 120px;
  color: white;
  font-family: Jost, sans-serif;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.6;
  }
`;
export const ContentDown = styled.div`
  height: 340px;
  width: 1361px;
  border-radius: 15px;
  padding: 27px;
  background-color: #272727;
`;
export const ContentWrapper = styled.div`
  height: 486px;
  width: 1416px;
  border-radius: 15px;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #4a4a4a;
`;
export const Tappo = styled.div`
  height: 55px;
  width: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: 0.3s;

  background-color: ${(props) => props.bg};
`;
export const InnerIcon = styled.img`
  height: 47px;
  width: 47px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.5;
  }
`;
export const ChangeButton = styled.div`
  height: 69px;
  width: 176px;
  border-radius: 15px;
  background-color: #272727;
  display: flex;
  padding-left: 7px;
  padding-right: 7px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ExportToExcel = styled.div`
  font-size: 40px;
  color: white;
  font-family: Jost, sans-serif;
`;
