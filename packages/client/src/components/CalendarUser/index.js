import React, {useEffect, useState} from "react";

import {CalendarWrapper, DayGrid, GridItem, InnerWrapper, OuterWrapper, Title,} from "./calendar";

const Calendar = ({sendDataToParent}) => {
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
    const [goToScreen, setGoToScreen] = useState(1);

    let data = [[]];

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
        data.length = 0;
        setDay(day);
        setYear(year);
        setMonth(month);

        setGoToScreen(1);
        data.push([day, month, year, goToScreen]);
        sendDataToParent(data);
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

    useEffect(() => {
        return () => {
            setGoToScreen(1);
        };
    });

    return (
        <OuterWrapper>
            <InnerWrapper>
                <Title>Select Day</Title>

                <CalendarWrapper>
                    <DayGrid>{drawDays(daysInMonth(month, year))}</DayGrid>
                </CalendarWrapper>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Calendar;
