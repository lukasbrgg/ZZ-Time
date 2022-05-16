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
  align-items: center;
  padding: 50px;
  justify-content: center;
  border-radius: 33px;
`;
export const EmployeeCard = styled.div`
  width: 250px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: #272727;
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


export const InnerWrapper1 = styled.div`
  width: 1097px;
  background-color: #272727;
  height: 731px;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  flex-direction: column;
  padding-left: 65px;

  border-radius: 33px;
`;
export const InnerContent = styled.div`
  width: 969px;
  background-color: #4a4a4a;
  height: 432px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;

  border-radius: 33px;
`;
export const InnerCard = styled.div`
  width: 349px;
  background-color: #272727;
  height: 250px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  transition: 0.3s;

  border-radius: 15px;

  :hover {
    background-color: #232323;
  }
`;
export const FlexColumnAdmin = styled.div`
  width: 349px;
  height: 364px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;



`;
export const InnerCardAdmin = styled.div`
  width: 349px;
  background-color: #272727;
  height: 80px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;
  padding-left: 100px;
  border-radius: 15px;


`;
export const InnerCard1 = styled.div`
  width: 507px;
  background-color: #272727;
  height: 364px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.4);
  align-items: center;
  padding-top: 25px;

  border-radius: 15px;
`;
export const TextStandart = styled.div`
  font-family: Jost, sans-serif;
  font-size: 40px;
  color: white;
`;
export const Upload = styled.img`
  height: 125px;
  width: 125px;
`;
export const FlexRow = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const SearchWrapper = styled.div`
  height: 450px;
  width: 1367px;
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  padding: 50px;
  background-color: #4a4a4a;
`;
export const Title = styled.div`
  color: white;
  font-size: 120px;
  font-family: Jost, sans-serif;
`;
export const CheckboxText = styled.div`
  color: white;
  font-size: 28px;
  font-family: Jost, sans-serif;
`;

export const InnerInput = styled.input`
  font-size: 40px;
  font-family: Jost, sans-serif;
  height: 63px;
  width: 419px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  background-color: #4a4a4a;

  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-style: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const SaveButton = styled.div`
  font-size: 40px;
  font-family: Jost, sans-serif;
  height: 63px;
  width: 419px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36aa68;
  transition: 0.3s;
  border-radius: 15px;
  padding-left: 20px;
  cursor: pointer;
  padding-right: 20px;
  border-style: none;

  :hover {
    background-color: #247246;
  }
`;
export const Searchbar = styled.input`
  font-size: 40px;
  font-family: Jost, sans-serif;
  height: 72px;
  width: 462px;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.54);
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-style: none;

  :focus {
    outline: none;
  }
`;

export const AddEmployee = styled.div`
  color: white;
  font-size: 40px;
  font-family: Jost, sans-serif;
  height: 87px;
  width: 455px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36aa68;
  border-radius: 15px;

  :hover {
    background-color: #247146;
  }
`;
