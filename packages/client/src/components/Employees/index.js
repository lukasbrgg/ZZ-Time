import React, {useRef, useState} from "react";

import {
  AddEmployee,
  CheckboxText,
  EmployeeCard,
  FlexColumnAdmin,
  FlexRow,
  InnerCard,
  InnerCard1,
  InnerCardAdmin,
  InnerContent,
  InnerInput,
  InnerWrapper,
  InnerWrapper1,
  OuterWrapper,
  SaveButton,
  Searchbar,
  SearchWrapper,
  TextStandart,
  Title,
  Upload,
} from "./employees";

import upload from "../../../assets/uploadImage.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {M2, ProjectWrapper, Regulat} from "../Projects/projects";
import m2 from "../../../assets/default.png";
import {useLocation} from "react-router-dom";
import axios from "axios";

let employeeData = []
let objectsData = []
let search = ''
let nametmp = ''
let surnametmp = ''
let emailtmp = ''


const Employees = () => {
    const [addEmployee, setAddEmployee] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [admin, setAdmin] = useState(false);

    const [userImage, setUserImage] = useState(null);


    const inputFile = useRef(null);

    function filterByValue(array, string) {
        let tempArray = []

        let len = array.length


        for (let i = 0; i < len; i++) {

            if ((array[i].first_name).toLowerCase().includes(search.toLowerCase())) {

                tempArray.push(array[i])

            }

        }

        return tempArray
    }

    const handleCheckboxChange = event => {
        setAdmin(event.target.checked)
    }

    const drawProjects = async () => {
        let i = 0;
        let projects = [];
        let searchedProjects = []
        if (search === '' || search === ' ' || search === null || search === false) {
            while (i < objectsData[0].length) {
                projects.push(
                    <SwiperSlide>
                        <EmployeeCard>
                            <M2 src={m2}/>
                            <Regulat>{objectsData[0][i].first_name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;

            }
            employeeData.length = 0
            employeeData.push(projects)
            setLoading(false)

        } else {
            i = 0
            setSearchTerm(search)

            searchedProjects.push(filterByValue(objectsData[0], search))

            while (i < searchedProjects[0].length) {

                projects.push(
                    <SwiperSlide>
                        <EmployeeCard>
                            <M2 src={m2}/>
                            <Regulat>{searchedProjects[0][i].first_name}</Regulat>
                        </EmployeeCard>
                    </SwiperSlide>
                );
                i++;


            }
            employeeData.length = 0
            employeeData.push(projects)
            setSearchTerm(search)

        }
        setLoading(false)
        return projects;
    };


    const user = useLocation().state


    async function AddEmployees() {
        setLoading(true)
        let axios = require('axios');
        let ad = 0
        if (admin === false) {
            ad = 0
        } else {
            ad = 1
        }

        let dataUs = JSON.stringify({
            "first_name": name,
            "last_name": surname,
            "email": email,
            "password": "TestTest123,",
            "level": ad
        });


        let config = {
            method: 'post',
            url: 'http://localhost:3000/v1/user',
            params: {
                'admin_id': user.id
            },
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataUs
        };

        await axios(config)
            .then(function (response) {
                return response.data[0].id

            })
            .then(function (id) {

                let dataImage = new FormData();
                dataImage.append('file', userImage);
                dataImage.append('user_id', id);

                let configImage = {
                    method: 'post',
                    url: 'http://localhost:3000/v1/userImage',
                    headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data`
                    },

                    data: dataImage
                };

                axios(configImage)
                    .then(function (response) {
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });
        await getAllEmployees()


    }

    const getAllEmployees = async () => {

        const client = axios.create({
            baseURL: "http://localhost:3000/v1"
        });

        const response = await client.get('/user');

        let responseData = []
        let len = response.data.length

        for (let i = 0; i < len; i++) {

            if (response.data[i].level === 0) {
                responseData.push(JSON.parse(JSON.stringify(response.data[i])))

            }


        }
        objectsData.length = 0
        objectsData.push(responseData)
        await drawProjects()

        return responseData


    }
    getAllEmployees()

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };
    const calcSlides = () => {


        if (employeeData[0].length < 4) {
            return employeeData[0].length

        }

        if (employeeData[0].length >= 4) {
            return 4

        }

        return 4

    };

    return (
        <OuterWrapper>
            {!addEmployee ? (
                <InnerWrapper>
                    <FlexRow>
                        <Title>Employees</Title>
                        <AddEmployee onClick={() => setAddEmployee(true)}>
                            add employee
                        </AddEmployee>
                    </FlexRow>
                    <SearchWrapper>
                        <Searchbar placeholder="search employee" onChange={event => {
                            search = event.target.value
                            setLoading(true)
                            setSearchTerm(search)

                            drawProjects()
                        }}/>
                        <ProjectWrapper>
                            {loading ? (
                                <div>
                                    loading
                                </div>
                            ) : (
                                <Swiper slidesPerView={calcSlides()} slidesPerGroup={calcSlides()} spaceBetween={30}
                                        navigation={{
                                            prevEl: '.prev',
                                            nextEl: '.next',
                                        }}>
                                    {employeeData[0]}
                                </Swiper>
                            )}


                        </ProjectWrapper>

                    </SearchWrapper>

                </InnerWrapper>
            ) : (
                <InnerWrapper1>
                    <Title>Add Employee</Title>
                    <InnerContent>
                        <FlexColumnAdmin>
                            <InnerCard onClick={onButtonClick}>
                                <input
                                    type="file"
                                    id="file"
                                    ref={inputFile}
                                    style={{display: "none"}}
                                    onChange={(e) => setUserImage(e.target.files[0])}

                                />

                                <TextStandart>upload image</TextStandart>
                                <Upload src={upload}></Upload>
                            </InnerCard>
                            <InnerCardAdmin>
                                <CheckboxText>Admin</CheckboxText>

                                <input
                                    type="checkbox"
                                    id="name"
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: 'transparent'


                                    }}
                                    name="name"
                                    checked={admin}
                                    onChange={handleCheckboxChange}/>

                            </InnerCardAdmin>
                        </FlexColumnAdmin>
                        <InnerCard1>
                            <InnerInput placeholder="e-mail" onChange={event => setEmail(event.target.value)}/>
                            <InnerInput placeholder="name" onChange={event => setName(event.target.value)}/>
                            <InnerInput placeholder="surname" onChange={event => setSurname(event.target.value)}/>
                            <SaveButton onClick={() => {
                                AddEmployees().then(r => setAddEmployee(false)
                                )
                            }}>
                                save
                            </SaveButton>
                        </InnerCard1>
                    </InnerContent>
                </InnerWrapper1>
            )}
        </OuterWrapper>
    );
};

export default Employees;
