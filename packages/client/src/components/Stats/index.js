import React, {useEffect, useState} from "react";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useAsync } from 'react-async-hook';

import {
    BackArrow,
    ChangeButton,
    ContentDown,
    ContentWrapper,
    ExportToExcel,
    FlexRow,
    FlexRow1,
    InnerIcon,
    InnerWrapper,
    OuterWrapper,
    StyledInput, StyledInput1,
    Tappo,
    Title,
} from "./stats";

import arrow from "../../../assets/backArrow.svg";
import profile from "../../../assets/profile.svg";
import machine from "../../../assets/milling.svg";
import axios from 'axios'
import {Swiper, SwiperSlide} from "swiper/react";
import {EmployeeCard, Searchbar} from "../Employees/employees";
import {M2, Regulat} from "../Projects/projects";
import m2 from "../../../assets/default.png";
import moment from "moment";

let userData = []
let projectData = []
let allHours = []
let search = ''
let employeeData = []
let users = []
let searchedUsers = []
let projects = []
let renderprojects = []
let dataToExport = []
let s_users = []

let formattedData = []

let allDataReady

const Stats = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState(0);
    const [tappoColor, setTappoColor] = useState("#36AA68");
    const [tappoColor1, setTappoColor1] = useState("transparent");
    const [loading, setLoading] = useState(true);
    const [userImage, setUserImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currName, setCurrName] = useState('');


    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = {Sheets: {data: ws}, SheetNames: ["data"]};
        const excelBuffer = XLSX.write(wb, {bookType: "xlsx", type: "array"});
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    const getType = (data) => {
        setType(data);

        if (data === 0) {
            setTappoColor("#36AA68");
            setTappoColor1("transparent");
        }
        if (data === 1) {
            setTappoColor1("#36AA68");
            setTappoColor("transparent");
        }
    };

    const getAllUsers = async () => {
        userData.length = 0
        const client = axios.create({
            baseURL: "http://localhost:3000/v1"
        });

        async function getPost() {

            const response = await client.get('/user');

            let responseData = []
            let len = response.data.length

            for (let i = 0; i < len; i++) {

                if (response.data[i].level === 0) {
                    responseData.push(JSON.parse(JSON.stringify(response.data[i])))

                }


            }
            console.log(responseData)


            return responseData

        }

        await getPost().then(async r => {

            userData.push(r)
            console.log(userData)
            await drawEmployees()

        })


    }



    const formatDataAll = async (response) => {

        formattedData.length = 0

        for(let timestamp of response){
            let userName = ''
            let user_id = timestamp.user_id
            let project_id = timestamp.project_id

            const timestamp1 = new Date(timestamp.start_time)
            const timestamp2 = new Date(timestamp.end_time)

            const s_time = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(timestamp1)
            const e_time = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(timestamp2)

            let result = moment(timestamp2).diff(timestamp1, 'hours')


            let axios = require('axios');

            let config = {
                method: 'get',
                url: 'http://localhost:3000/v1/user?id=' + user_id,
                headers: {}
            };

            await axios(config)
                .then(async function (response) {
                    userName = response.data[0].first_name + ' ' + response.data[0].last_name


                    const axios = require('axios');
                    const client = axios.create({
                        baseURL: "http://localhost:3000/v1",

                    });

                    async function auth() {

                        let response = await client.get('/project?id=' + project_id).catch(function (error) {
                            console.log('no Data!')


                        });

                        return response.data

                    }

                    await auth().then( r => {


                        let project_name = r[0].name

                        formattedData.push({
                            Project_ID: project_id,
                            Project_Name: project_name,
                            Employee: userName,
                            Start_Time: s_time,
                            End_Time: e_time,
                            h_worked: result,

                        })
                        console.log(formattedData)

                    })

                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        exportToCSV(formattedData, 'All Data')

    }


    const formatDataProject = async (response, name) => {
        console.log(response)

        formattedData.length = 0

        for(let timestamp of response){
            let userName = ''

            let axios = require('axios');

            let config = {
                method: 'get',
                url: 'http://localhost:3000/v1/user?id=' + timestamp.user_id,
                headers: {}
            };

            await axios(config)
                .then(async function (response) {
                    userName = response.data[0].first_name + ' ' + response.data[0].last_name
                    const timestamp1 = new Date(timestamp.start_time)
                    const timestamp2 = new Date(timestamp.end_time)

                    const s_time = new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).format(timestamp1)
                    const e_time = new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).format(timestamp2)

                    let result = moment(timestamp2).diff(timestamp1, 'hours')

                    formattedData.push({
                        Start_Time: s_time,
                        End_Time: e_time,
                        h_worked: result,
                        Employee: userName
                    })

                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        exportToCSV(formattedData, name)




    }


    const getDataByProject = async (projectId) => {

        const axios = require('axios');
        const client = axios.create({
            baseURL: "http://localhost:3000/v1",

        });

        async function auth() {

            let response = await client.get('/investedHours?project_id=' + projectId).catch(function (error) {
                console.log('no Data!')
            });

            return response.data


        }

        auth().then(async r => {
            console.log(r)

            const config = {
                method: 'get',
                url: 'http://localhost:3000/v1/project?id=' + projectId,
                headers: {}
            };

            axios(config)
                .then(async function (response) {
                    console.log(response.data[0].name)
                    console.log(r)


                    await formatDataProject(r, response.data[0].name)

                })
                .catch(function (error) {
                    console.log(error);
                });



        })


    }

    const getDataByUser = async (userId, name) => {

        const axios = require('axios');
        const client = axios.create({
            baseURL: "http://localhost:3000/v1",

        });

        async function auth() {

            let response = await client.get('/investedHours?user_id=' + userId).catch(function (error) {
                console.log('no Data!')
            });

            return response.data


        }

        auth().then(async r => {

            if(r.length > 0){
                await formatDataUser(r, name)
            }
            else{
                alert("No work by this user yet!")
            }

        })


    }

    const formatDataUser = async (response, name) => {


        formattedData.length = 0
        console.log(response)


        for(let timestamp of response){
            let userName = name
            console.log(timestamp)

            let axios = require('axios');

            let config = {
                method: 'get',
                url: 'http://localhost:3000/v1/project?id=' + timestamp.project_id,
                headers: { }
            };

            await axios(config)
                .then(function (response) {

                    console.log(response.data[0]);

                    const timestamp1 = new Date(timestamp.start_time)
                    const timestamp2 = new Date(timestamp.end_time)

                    const s_time = new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).format(timestamp1)
                    const e_time = new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).format(timestamp2)

                    let result = moment(timestamp2).diff(timestamp1, 'hours')

                    formattedData.push({
                        Employee: userName,
                        Project: response.data[0].name,
                        Start_Time: s_time,
                        End_Time: e_time,
                        h_worked: result,
                    })


                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        exportToCSV(formattedData, name)

    }









    const getAllData = async () => {

        const client = axios.create({
            baseURL: "http://localhost:3000/v1",

        });

        async function auth() {

            let response = await client.get('/investedHours').catch(function (error) {
                console.log('no Data!') // this is the part you need that catches 400 request
            });

            return response.data


        }

        auth().then(async r => {


            await formatDataAll(r)

        })


    }

    function filterByValueProject(array, string) {

        let tempArray = []

        console.log(array)


        for (let i of array) {
            console.log()

            if ((i.name).toLowerCase().includes(search.toLowerCase())) {
                tempArray.push(i)

            }

        }
        console.log(tempArray)
        return tempArray
    }

    function filterByValue(array, string) {

        let tempArray = []

        console.log(array)


        for (let i of array) {
            console.log()

            if ((i.first_name).toLowerCase().includes(search.toLowerCase())) {
                tempArray.push(i)

            }

        }
        console.log(tempArray)
        return tempArray
    }

    const drawProjects = async () => {
        let i = 0;
        projects.length = 0
        if (search === '' || search === ' ' || search === null || search === false) {
            while (i < projectData[0].length) {
                console.log(projectData[0][i].id)
                projects.push(
                    <SwiperSlide>
                        <EmployeeCard value={projectData[0][i].id} id={projectData[0][i].id} onClick={(e, data)=>{
                            console.log(e.currentTarget.id)
                            getDataByProject(e.currentTarget.id)
                        }}>
                            <M2 src={m2}/>
                            <Regulat>{projectData[0][i].name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;

            }
            renderprojects.length = 0
            renderprojects.push(projects)
            console.log(users)
        } else {
            i = 0
            setSearchTerm(search)
            s_users.length = 0
            searchedUsers.length =0
            s_users.push(filterByValueProject(projectData[0], search))

            while (i < s_users[0].length) {

                searchedUsers.push(
                    <SwiperSlide>
                        <EmployeeCard value={s_users[0][i].id} id={s_users[0][i].id} onClick={(e, data)=>{
                            getDataByProject(e.currentTarget.id)
                        }}>
                            <M2 src={m2}/>
                            <Regulat>{s_users[0][i].name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;


            }
            renderprojects.length = 0
            renderprojects.push(searchedUsers)
            setSearchTerm(search)

        }
    };


    const drawEmployees = async () => {
        let i = 0;
        console.log(userData)

        users.length = 0
        if (search === '' || search === ' ' || search === null || search === false) {
            while (i < userData[0].length) {
                users.push(
                    <SwiperSlide>
                        <EmployeeCard title={userData[0][i].first_name + ' ' + userData[0][i].last_name} id={userData[0][i].id} onClick={(e, data) => {
                            getDataByUser(e.currentTarget.id, e.currentTarget.title)
                        }}>
                            <M2 src={m2}/>
                            <Regulat>{userData[0][i].first_name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;

            }
            employeeData.length = 0
            employeeData.push(users)
            console.log(users)
        } else {
            i = 0
            setSearchTerm(search)
            s_users.length = 0
            searchedUsers.length =0
            s_users.push(filterByValue(userData[0], search))

            while (i < s_users[0].length) {

                searchedUsers.push(
                    <SwiperSlide>
                        <EmployeeCard title={s_users[0][i].first_name + ' ' + s_users[0][i].last_name} id={s_users[0][i].id} onClick={(e, data) => {
                            getDataByUser(e.currentTarget.id, e.currentTarget.title)
                        }}>
                            <M2 src={m2}/>
                            <Regulat>{s_users[0][i].first_name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;


            }
            employeeData.length = 0
            employeeData.push(searchedUsers)
            setSearchTerm(search)

        }

        setLoading(false)
    };


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
            console.log(r);
            projectData.push(r)
            await drawProjects()

            let config = {
                method: 'get',
                url: 'http://localhost:3000/v1/projectImage',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });


        })


    }
    getAllProjects()
    getAllUsers()

    useEffect(() => {
        return () => {
        };
    });

    const calcSlides = () => {


        if (employeeData.length < 4) {
            return 4

        }

        if (employeeData.length >= 4) {
            return 4

        }

        return 4

    };

    return (
        <OuterWrapper>

            <InnerWrapper>
                <FlexRow>
                    <Title>Stats</Title>
                    <FlexRow1 onClick={() => {
                        getAllData()
                    }}>
                        <ExportToExcel>export to excel</ExportToExcel>
                        <BackArrow src={arrow}/>
                    </FlexRow1>
                </FlexRow>
                <ContentWrapper>
                    <FlexRow>
                        {type === 0 ? (
                            <StyledInput placeholder="search employee"  onChange={event => {
                                search = event.target.value
                                setSearchTerm(search)
                                drawEmployees()

                            }} />
                        ) : (
                            <StyledInput1 placeholder="search project"   onChange={event => {
                                search = event.target.value
                                setSearchTerm(search)
                                drawProjects()

                            }} />
                        )}
                        <ChangeButton>
                            <Tappo bg={tappoColor}>
                                <InnerIcon src={profile} onClick={() => getType(0)}></InnerIcon>
                            </Tappo>

                            <Tappo bg={tappoColor1}>
                                <InnerIcon src={machine} onClick={() => getType(1)}></InnerIcon>
                            </Tappo>
                        </ChangeButton>
                    </FlexRow>
                    <ContentDown>
                        <Swiper slidesPerView={calcSlides()} slidesPerGroup={calcSlides()} spaceBetween={30}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next',
                                }}>
                            {type === 0?(
                                employeeData[0]

                            ):(
                                renderprojects [0]

                            )}

                        </Swiper>

                    </ContentDown>
                </ContentWrapper>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Stats;
