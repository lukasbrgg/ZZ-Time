import React, {useState} from "react";

import {Core, Item, ItemOuter, ItemOuter1, ItemWrapper, OuterWrapper, Page,} from "./menu";
import AddTime from "./../../../AddTime/index";
import clock from "../../../../../assets/clock.svg";
import calendar from "../../../../../assets/calendar.svg";
import profile from "../../../../../assets/profileImg.svg";

import CalendarUser from "./../../../CalendarUser/index";

import UserSettings from "./../../../UserSettings/index";

const MenuUser = () => {
    const [currState, setCurrState] = useState(0);
    const [addProject, setAddProject] = useState(false);
    const [receivedData, setReceivedData] = useState([[]]);

    const imageClick = (param) => {
        setCurrState(param);
        console.log(param);
    };
    const sendDataToParent = (index) => {
        // the callback. Use a better name
        console.log(index);
        setReceivedData(index);
    };

    const AddTimeScreen = () => (
        <div>
            <AddTime dataParentToChild={receivedData}/>
        </div>
    );

    const CalendarScreen = () => (
        <div>
            <CalendarUser sendDataToParent={sendDataToParent}/>
        </div>
    );

    const ProjectScreen = () => (
        <div>
            <UserSettings/>
        </div>
    );

    const renderScreen = (param) => {
        switch (param) {
            case 0:
                return AddTimeScreen();
            case 1:
                return CalendarScreen();
            case 2:
                return ProjectScreen();

            default:
                return "foo";
        }
    };

    return (
        <Page>
            <OuterWrapper>
                <ItemWrapper>
                    {currState === 0 ? (
                        <ItemOuter>
                            <Item src={clock} onClick={() => imageClick(0)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={clock} onClick={() => imageClick(0)}/>
                        </ItemOuter1>
                    )}

                    {currState === 1 ? (
                        <ItemOuter>
                            <Item src={calendar} onClick={() => imageClick(1)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={calendar} onClick={() => imageClick(1)}/>
                        </ItemOuter1>
                    )}

                    {currState === 2 ? (
                        <ItemOuter>
                            <Item src={profile} onClick={() => imageClick(2)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={profile} onClick={() => imageClick(2)}/>
                        </ItemOuter1>
                    )}
                </ItemWrapper>
            </OuterWrapper>
            <Core>{renderScreen(currState)}</Core>
        </Page>
    );
};

export default MenuUser;
