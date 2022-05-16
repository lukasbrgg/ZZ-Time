import React, {useRef, useState} from "react";


import axios from "axios";
import moment from "moment";
import {
  AddButton,
  DayField,
  DayMonth,
  EasyRow,
  EditButton,
  FlexColumn,
  FlexRow2,
  InnerWrapper,
  InnerWrapper1,
  InputText,
  InputTextWrapper,
  InputTime,
  OuterWrapper,
  ProjectName,
  ProjectOuterShell,
  SearchInput,
  SecOne,
  SecThree,
  SecTwo,
  SelectProject,
  SetToday,
  TimeStat,
  TimeText,
  Title,
  WrapperRight,
  YearSmallText,
} from "./addTime";
import {useLocation} from "react-router-dom";

let objectsData = []
let timeWorked = {}
let stampedTimes = []
let search = ''

const Calendar = ({dataParentToChild}) => {
    const [screen, setScreen] = useState(0);
    const [dot1, setDot1] = useState("#36AA68");
    const [dot2, setDot2] = useState("#A0A0A0");
    const [enableChange, setEnableChange] = useState(false);
    const [click, setClick] = useState(false);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);

    const [newHours, setNewHours] = useState(0);
    const [newMinutes, setNewMinutes] = useState(0);

    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [forceRender, setForceRender] = useState('no');
    const [currentProject, setCurringProject] = useState(null);
    const [show, setShow] = useState('none');
    const [projectSelected, setProjectSelected] = useState(false);


    const [arr1, setarr1] = useState("flex");
    const [arr2, setarr2] = useState("none");

    const user = useLocation().state
    console.log(user)


    let date = new Date();


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


    const shift = () => {
        if (screen === 0) {
            setScreen(1);
            setarr1("none");
            setarr2("flex");
        }
        if (screen === 1) {
            setScreen(0);
            setarr2("none");
            setarr1("flex");
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

    const [dummy, setDummy] = useState(false);

    function filterByValue(array, string) {

        let tempArray = []

        let len = array.length


        for (let i = 0; i < len; i++) {

            if ((array[i].name).toLowerCase().includes(search.toLowerCase())) {

                tempArray.push(array[i])

            }

        }

        return tempArray
    }

    const SaveTimestampsToServer = () => {

        stampedTimes.forEach(currStamp => {
            console.log(currStamp)
            let config = {
                method: 'post',
                url: 'http://localhost:3000/v1/investedHours',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: currStamp
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    alert('Successfully savevd')
                })
                .catch(function (error) {
                    console.log(error);
                });


        })


    }


    const AddTimeToArray = () => {
        let minutes = 0
        let hours = 0
        let initialDate
        let currDate

        if (projectSelected === true && currentProject) {
            minutes = document.getElementById('minutes').value
            hours = document.getElementById('hours').value

            let date = new Date()

            if (document.getElementById('hours').value === '') {

                hours = 0
            }


            if (document.getElementById('minutes').value === '') {

                minutes = 0
            }

            if (dataParentToChild[0].length === 0) {
                initialDate = moment(date).subtract(minutes, 'm');
                initialDate = moment(date).subtract(hours, 'h').format();

                currDate = new Date()
                currDate = moment(currDate).format();

            } else {
                date = moment(date).set('date', dataParentToChild[0][0])
                console.log(date)
                console.log(moment(date).format())

                initialDate = moment(date).subtract(minutes, 'm');
                initialDate = moment(date).subtract(hours, 'h').format();

                currDate = new Date()
                currDate = moment(currDate).set('date', dataParentToChild[0][0])
                currDate = moment(currDate).format();


            }


            if (hours === 0 && minutes === 0) {
                alert("No time entered!")
            } else {
                timeWorked = {}
                timeWorked.user_id = user.id
                timeWorked.project_id = currentProject
                timeWorked.start_time = initialDate
                timeWorked.end_time = currDate

                stampedTimes.push(timeWorked)

                let displayHours = newHours
                let displayMinutes = newMinutes

                displayHours = displayHours + parseInt(hours)
                displayMinutes = displayMinutes + parseInt(minutes)

                if (displayMinutes > 59) {

                    displayMinutes = displayMinutes - 60
                    displayHours = displayHours + 1

                }

                setNewHours(displayHours)
                setNewMinutes(displayMinutes)


                console.log(stampedTimes)
            }


        } else {
            alert("Select project to stamp")
        }


    }


    const getAllProjects = async () => {

        const client = axios.create({
            baseURL: "http://localhost:3000/v1",

        });

        async function auth() {

            let response = await client.get('/project').catch(function (error) {
                console.log('no Projects!') // this is the part you need that catches 400 request
            });

            return response.data


        }

        auth().then(async r => {
            objectsData.length = 0
            objectsData.push(r)
            console.log(objectsData);
            setLoading(false)

        })


    }

    getAllProjects()

    function getRealDate(string) {

        let date = new Date(string)
        let s = ''
        let month = date.getUTCMonth()

        month = month + 1

        s = date.getUTCDate().toString() + "." + month.toString() + "." + date.getFullYear().toString()

        return s
    }

    return (
        <OuterWrapper>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>


                    <InnerWrapper>
                        <InnerWrapper1>
                            <FlexColumn>
                                <Title>Edit Day</Title>
                                <DayField>
                                    <YearSmallText>{year}</YearSmallText>
                                    <FlexRow2>
                                        <SetToday
                                            onClick={() => {
                                                dataParentToChild[0].length = 0;
                                                setDummy(true);
                                            }}
                                        >
                                            go to today
                                        </SetToday>
                                    </FlexRow2>

                                    <DayMonth mb={"-60px"}>
                                        {dataParentToChild[0].length === 0
                                            ? date.getDate()
                                            : dataParentToChild[0][0]}
                                    </DayMonth>
                                    <DayMonth>{Months(month)}</DayMonth>
                                </DayField>
                                <EditButton onClick={() => {

                                    SaveTimestampsToServer()

                                }
                                }>save</EditButton>
                            </FlexColumn>

                            <WrapperRight>
                                <SecOne>
                                    <InputTextWrapper>
                                        <InputText>hours</InputText>
                                        <InputText>minutes</InputText>
                                    </InputTextWrapper>

                                    <InputTime
                                        type="number"
                                        min="0" max="24"
                                        id='hours'

                                        ref={inputRef}
                                        placeholder="0"
                                    />

                                    <InputTime
                                        type="number"
                                        id='minutes'

                                        min="0" max="60"
                                        ref={inputRef1}
                                        placeholder="0"
                                    />
                                    <TimeStat>
                                        <TimeText>{newHours}h {newMinutes}min</TimeText>
                                    </TimeStat>
                                </SecOne>
                                <SecTwo>
                                    <SelectProject>

                                        {objectsData[0].map(project =>

                                            <ProjectOuterShell id={project.id} show={show} onClick={() => {
                                                if (document.getElementById(project.id).style['borderStyle'] === 'none' && projectSelected === true) {

                                                    alert("Choose one at the time!")

                                                }

                                                if (document.getElementById(project.id).style['borderStyle'] === '' && projectSelected === true) {

                                                    alert("Choose one at the time!")

                                                }
                                                if (document.getElementById(project.id).style['borderStyle'] === 'solid' && projectSelected === true) {

                                                    document.getElementById(project.id).style['borderStyle'] = 'none'
                                                    setCurringProject(null)
                                                    setProjectSelected(false)
                                                }


                                                if (document.getElementById(project.id).style['borderStyle'] === 'none' && projectSelected === false) {

                                                    document.getElementById(project.id).style['borderStyle'] = 'solid'
                                                    setCurringProject(project.id)
                                                    setProjectSelected(true)
                                                }

                                                if (document.getElementById(project.id).style['borderStyle'] === '' && projectSelected === false) {

                                                    document.getElementById(project.id).style['borderStyle'] = 'solid'
                                                    setCurringProject(project.id)
                                                    setProjectSelected(true)
                                                }


                                            }}>

                                                <ProjectName>
                                                    {project.name}
                                                </ProjectName>

                                                <EasyRow>

                                                    <ProjectName>
                                                        Created:
                                                    </ProjectName>

                                                    <ProjectName>
                                                        {getRealDate(project.created)}
                                                    </ProjectName>
                                                </EasyRow>

                                            </ProjectOuterShell>
                                        )}

                                    </SelectProject>
                                </SecTwo>

                                <SecThree>
                                    <SearchInput placeholder="search project" onChange={event => {
                                        search = event.target.value
                                        setSearchTerm(search)
                                        objectsData[0] = filterByValue(objectsData[0])
                                        console.log(objectsData)

                                    }} />
                                    <AddButton
                                        onClick={() => {

                                            AddTimeToArray()
                                        }

                                        }
                                    >
                                        add
                                    </AddButton>
                                </SecThree>
                            </WrapperRight>
                        </InnerWrapper1>
                    </InnerWrapper>


                </div>
            )}
        </OuterWrapper>
    );
};

export default Calendar;
