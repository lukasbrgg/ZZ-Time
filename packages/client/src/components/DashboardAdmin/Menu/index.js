import React, {useState} from "react";

import {Core, Item, ItemOuter, ItemOuter1, ItemWrapper, OuterWrapper, Page,} from "./menu";

import homeImg from "../../../../assets/home.svg";
import calendar from "../../../../assets/calendar.svg";
import profile from "../../../../assets/profileImg.svg";
import stats from "../../../../assets/stats.svg";
import milling from "../../../../assets/milling.svg";

import HomeScreen from "./../../Home/index";
import Employee from "./../../Employees/index";
import Stats from "./../../Stats/index";

import Calendar from "./../../Calendar/index";

import Projects from "./../../Projects/index";

const Menu = () => {
    const [currState, setCurrState] = useState(0);
    const [addProject, setAddProject] = useState(false);

    const imageClick = (param) => {
        setCurrState(param);
        console.log(param);
    };

    const Home = () => (
        <div>
            <HomeScreen/>
        </div>
    );

    const CalendarScreen = () => (
        <div>
            <Calendar/>
        </div>
    );

    const ProjectScreen = () => (
        <div>
            <Projects addProject={addProject}/>
        </div>
    );

    const Employees = () => (
        <div>
            <Employee/>
        </div>
    );

    const StatsScreen = () => (
        <div>
            <Stats/>
        </div>
    );

    const renderScreen = (param) => {
        switch (param) {
            case 0:
                return Home();
            case 1:
                return CalendarScreen();
            case 2:
                return ProjectScreen();
            case 3:
                return Employees();
            case 4:
                return StatsScreen();

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
                            <Item src={homeImg} onClick={() => imageClick(0)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={homeImg} onClick={() => imageClick(0)}/>
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
                            <Item src={milling} onClick={() => imageClick(2)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={milling} onClick={() => imageClick(2)}/>
                        </ItemOuter1>
                    )}
                    {currState === 3 ? (
                        <ItemOuter>
                            <Item src={profile} onClick={() => imageClick(3)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={profile} onClick={() => imageClick(3)}/>
                        </ItemOuter1>
                    )}
                    {currState === 4 ? (
                        <ItemOuter>
                            <Item src={stats} onClick={() => imageClick(4)}/>
                        </ItemOuter>
                    ) : (
                        <ItemOuter1>
                            <Item src={stats} onClick={() => imageClick(4)}/>
                        </ItemOuter1>
                    )}
                </ItemWrapper>
            </OuterWrapper>
            <Core>{renderScreen(currState)}</Core>
        </Page>
    );
};

export default Menu;
