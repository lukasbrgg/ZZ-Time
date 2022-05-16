import React, {useState} from "react";

import {
  Add,
  Arnicard,
  Arrow,
  AssigneeCard,
  AssigneeWrapper,
  Beer,
  Button,
  CalendarWrapper,
  CardBodyText,
  CardText,
  DayGrid,
  DayWrapper,
  EditDayWrapper,
  EditWrapper1,
  FlexColumn,
  FlexColumn1,
  FlexRow,
  GridItem,
  InnerWrapper,
  InputNumber,
  InputNumber1,
  OuterWrapper,
  RightCardTappo,
  SaveButton,
  Selector,
  SelectorText,
  SelectorWrapper,
  TextStandart,
  Title,
  Vacation,
} from "./calendar";

import arrow from "../../../assets/calendarArrow.svg";
import beer from "../../../assets/beer.svg";
import Profile from "../../../assets/default.png";

import SearchbarsAssignee from "./../SearchBarAssignee/index";
import SearchbarsProject from "./../SearchBarProjects/index";

const Calendar = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    const getCurrentMonth = () => {
        let month = new Date().getMonth();
        month = month + 1;

        return month;
    };

    const [month, setMonth] = useState(getCurrentMonth);
    const [year, setYear] = useState(getCurrentYear);
    const [day, setDay] = useState(1);

    const [goTo, setGoTo] = useState(true);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    const changeMonth = (currMonth, direction) => {
        if (direction) {
            if (currMonth !== 12) {
                setMonth(currMonth + 1);
            } else {
                setMonth(1);
            }
        }

        if (!direction) {
            if (currMonth !== 1) {
                setMonth(currMonth - 1);
            } else {
                setMonth(12);
            }
        }
    };
    const goToDate = (day, month, year) => {
        setDay(day);
        setYear(year);
        setMonth(month);
    };

    const logDate = (currMonth, currYear, currDay) => {
        setGoTo(false);

        goToDate(currDay, currMonth, currYear);
    };

    const drawDays = (amount) => {
        let i = 0;
        let days = [];
        while (i < amount) {
            i++;
            days.push(
                <GridItem
                    onClick={(event) =>
                        logDate(month, year, Number(event.target.innerText))
                    }
                >
                    {i}
                </GridItem>
            );
        }
        return days;
    };

    const changeYear = (currYear, direction) => {
        if (direction) {
            setYear(currYear + 1);
        }

        if (!direction) {
            setYear(currYear - 1);
        }
    };
    const Months = (param) => {
        switch (param) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sept";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";

            default:
                return "foo";
        }
    };

    return (
        <OuterWrapper>
            {goTo ? (
                <InnerWrapper>
                    <Title>Calendar</Title>
                    <SelectorWrapper>
                        <Selector>
                            <Button onClick={() => changeMonth(month, false)}>
                                <Arrow rotate={"rotateZ(180deg)"} src={arrow}/>
                            </Button>
                            <SelectorText>{Months(month)}</SelectorText>
                            <Button onClick={() => changeMonth(month, true)}>
                                <Arrow src={arrow}/>
                            </Button>
                        </Selector>
                        <Selector>
                            <Button onClick={() => changeYear(year, false)}>
                                <Arrow rotate={"rotateZ(180deg)"} src={arrow}/>
                            </Button>
                            <SelectorText>{year}</SelectorText>
                            <Button onClick={() => changeYear(year, true)}>
                                <Arrow src={arrow}/>
                            </Button>
                        </Selector>
                    </SelectorWrapper>

                    <CalendarWrapper>
                        <DayGrid>{drawDays(daysInMonth(month, year))}</DayGrid>
                    </CalendarWrapper>
                </InnerWrapper>
            ) : (
                <InnerWrapper>
                    <Title>Edit Day</Title>
                    <EditDayWrapper>
                        <FlexColumn>
                            <DayWrapper>
                                <CardText>{year}</CardText>
                                <CardBodyText>{day}</CardBodyText>
                                <CardBodyText>{Months(month)}</CardBodyText>
                            </DayWrapper>
                            <SaveButton onClick={() => setGoTo(true)}>save</SaveButton>
                        </FlexColumn>
                        <RightCardTappo>
                            <FlexRow>
                                <SearchbarsProject></SearchbarsProject>
                                <SearchbarsAssignee></SearchbarsAssignee>
                            </FlexRow>
                            <EditWrapper1>
                                <AssigneeWrapper>
                                    <AssigneeCard>

                                    </AssigneeCard>
                                    <FlexColumn1>
                                        <InputNumber1
                                            type="number"
                                            max="9"
                                            placeholder="hrs"
                                        ></InputNumber1>
                                        <TextStandart>Hours</TextStandart>
                                    </FlexColumn1>
                                    <FlexColumn1>
                                        <InputNumber
                                            type="number"
                                            max="59"
                                            placeholder="min"
                                        ></InputNumber>
                                        <TextStandart>Minutes</TextStandart>
                                    </FlexColumn1>

                                    <Add>add</Add>
                                </AssigneeWrapper>
                                <Vacation>
                                    <Beer src={beer}/>
                                    <TextStandart>vacation</TextStandart>
                                </Vacation>
                            </EditWrapper1>
                        </RightCardTappo>
                    </EditDayWrapper>
                </InnerWrapper>
            )}
        </OuterWrapper>
    );
};

export default Calendar;
