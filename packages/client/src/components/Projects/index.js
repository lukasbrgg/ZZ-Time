import React, {useEffect, useRef, useState} from "react";

import {
  AddProjectInner,
  AddUserBox,
  AddUserToProject,
  AddWrapper,
  Arrow,
  ArrowWrapper,
  BottomBox,
  BottomBoxInner,
  Button,
  ButtonImage,
  ButtonText,
  ButtonWrapper,
  Close,
  CloseButton,
  EstimateText,
  Field,
  FlexGrid,
  FlexRow1,
  Form,
  InnerWrapper,
  InnerWrapperDetails1,
  InnerWrapperDetails2,
  InputNumber1,
  M2,
  OuterWrapper,
  ProjectCard,
  ProjectDetailsOuterWrapper,
  ProjectDetailsOuterWrapper1,
  ProjectWrapper,
  Regulat,
  SaveButton,
  SearchUser,
  Title,
  UploadDocument,
  UploadImage,
  UploadText,
  WrapperHours,
  WrapperInput,
  WrapperRight,
} from "./projects";

import arrow from "../../../assets/backArrow.svg";
import upload from "../../../assets/uploadImage.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import back from '../../../assets/close.svg'
import close from '../../../assets/close.svg'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

import Searchbar from "./../SearchBarPro/index";
import SearchbarName from "./../SearchBarName/index";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {AdminWrapper, LoginHannes, ProfileName, ProfileWrapper} from "../AdminLogin/adminLogin";

let projectData = []
let objectsData = []
let userRenderable = []
let imageUrls = []
let userData = []
let addUserToProject = []


let search = ''


const Projects = () => {
    const [detail, setDetail] = useState(false);
    const [addPro, setAddPro] = useState(false);
    const [loading, setLoading] = useState(true);
    const [projectImage, setProjectImage] = useState(null);

    const [files, setFiles] = useState({});
    const inputFile = useRef(null);
    const [addUser, setAddUser] = useState(false);
    const [overlayOpacity, setOverlayOpacity] = useState(1);
    const [estimatedHours, setEstimatedHours] = useState(0);
    const [newNameProject, setNewNameProject] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewProjectDetails, setViewProjectDetails] = useState(false);
    const [show, setShow] = useState('none');
    const [render, forceRender] = useState('no');


    const [projectDetails, setProjectDetails] = useState([]);


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

    const drawUsers = async () => {

        let i = 0;
        let admins = [];
        let searchedUsers = []
        while (i < userData[0].length) {
            admins.push(
                <ProfileWrapper>
                    <AdminWrapper>

                        <LoginHannes/>
                    </AdminWrapper>
                    <ProfileName>
                        {userData[0][i].first_name}
                    </ProfileName>

                </ProfileWrapper>
            );
            i++;

        }
        userRenderable.length = 0
        userRenderable.push(admins)


        return admins;
    };

    const drawProjects = async () => {

        console.log('test')
        let i = 0;
        let projects = [];
        let searchedProjects = []
        let url = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png'
        if (search === '' || search === ' ' || search === null || search === false) {

            while (i < objectsData[0].length) {

                if (imageUrls.length !== 0) {
                    url = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png'

                    imageUrls[0].forEach(element => {
                        console.log(element.path)
                        if (element.project_id.toString() === objectsData[0][i].id.toString()) {
                            url = 'http://localhost:3000' + element.path

                        }
                    })

                }


                projects.push(
                    <SwiperSlide>
                        <ProjectCard onClick={() => {
                            setViewProjectDetails(false)
                            setDetail(false)
                            setProjectDetails(objectsData[0][i])
                        }}>
                            <M2 src={url}/>
                            <Regulat>{objectsData[0][i].name}</Regulat>
                        </ProjectCard>
                    </SwiperSlide>
                );

                i++;

            }
            projectData.length = 0
            projectData.push(projects)
            setSearchTerm(search)

        } else {
            i = 0
            searchedProjects.push(filterByValue(objectsData[0], search))

            while (i < searchedProjects[0].length) {

                if (imageUrls.length !== 0) {
                    url = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png'

                    imageUrls[0].forEach(element => {
                        if (element.project_id.toString() === searchedProjects[0][i].id.toString()) {
                            url = 'http://localhost:3000' + element.path

                        }
                    })

                }
                projects.push(
                    <SwiperSlide>
                        <ProjectCard onClick={() => {
                            setViewProjectDetails(false)
                            setDetail(false)
                            setProjectDetails(searchedProjects[0][i])

                        }}>
                            <M2 src={url}/>
                            <Regulat>{searchedProjects[0][i].name}</Regulat>
                        </ProjectCard>
                    </SwiperSlide>
                );
                i++;


            }
            projectData.length = 0
            projectData.push(projects)
            setSearchTerm(search)

        }
        forceRender('yes')
        setLoading(false)
        return projects;
    };


    const user = useLocation().state


    const sendDataToParent = async (index) => { // the callback. Use a better name
        await setNewNameProject(index)

    };
    const sendDataToParentSearch = async (index) => { // the callback. Use a better name
        search = index
        await drawProjects()

    };

    async function AddProject() {
        setLoading(true)
        let axios = require('axios');
        let createdProject
        let dataUs = JSON.stringify({
            "name": newNameProject,
            "estimated_hours": estimatedHours
        });

        let config = {
            method: 'post',
            url: 'http://localhost:3000/v1/project',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                'admin_id': user.id
            },

            data: dataUs
        };

        axios(config)
            .then(function (response) {

                return response.data[0].id
            })
            .then(function (id) {

                if (addUserToProject.length !== 0) {
                    addUserToProject.forEach(userId => {

                        let data = JSON.stringify({
                            "user_id": userId,
                            "project_id": id
                        });

                        let config = {
                            method: 'post',
                            url: 'http://localhost:3000/v1/assignedUser',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: data
                        };

                        axios(config)
                            .then(function (response) {
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                    })

                    let dataImage = new FormData();
                    dataImage.append('file', projectImage);
                    dataImage.append('project_id', id);

                    let configImage = {
                        method: 'post',
                        url: 'http://localhost:3000/v1/projectImage',
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


                }


            })
            .then(function (id) {


            })
            .catch(function (error) {
                console.log(error);
            });


        await getAllProjects()
        setAddPro(false)


    }

    const getUsers = async () => {
        addUserToProject.length = 0
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


            return responseData

        }

        await getPost().then(r => {
            userData.length = 0
            userData.push((JSON.parse(JSON.stringify(r))))
            setAddUser(true)

        })

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
            objectsData.push(r)

            let config = {
                method: 'get',
                url: 'http://localhost:3000/v1/projectImage',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                    imageUrls.push(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

            await drawProjects()


        })


    }
    getAllProjects()


    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const calcSlides = () => {


        if (projectData[0].length < 4) {
            return projectData[0].length

        }

        if (projectData[0].length >= 4) {
            return 4

        }

        return 4

    };

    useEffect(() => {
        return () => {
            setOverlayOpacity(1);
        };
    }, []);


    SwiperCore.use([Navigation]);

    return (
        <OuterWrapper overlayOpacity={overlayOpacity}>
            {!addPro ? (
                <div>

                    {!viewProjectDetails ? (

                        <InnerWrapper>
                            <Title>Projects</Title>
                            <Searchbar sendDataToParent={sendDataToParentSearch}/>
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
                                        {projectData[0]}
                                    </Swiper>
                                )}


                            </ProjectWrapper>
                            <ArrowWrapper>
                                <Arrow rotate={0} src={arrow} className="prev"/>
                                <Arrow rotate={"180deg"} src={arrow} className="next"/>
                            </ArrowWrapper>

                            <ButtonWrapper>
                                <Button onClick={() => setAddPro(true)}>
                                    <ButtonText>+</ButtonText>
                                </Button>
                            </ButtonWrapper>
                        </InnerWrapper>
                    ) : (
                        <ProjectDetailsOuterWrapper>
                            <CloseButton src={back} onClick={() => setViewProjectDetails(false)}/>
                            <Title>Edit Project</Title>
                            <ProjectDetailsOuterWrapper1>

                                <InnerWrapperDetails1>

                                </InnerWrapperDetails1>
                                <InnerWrapperDetails2>

                                </InnerWrapperDetails2>
                            </ProjectDetailsOuterWrapper1>


                        </ProjectDetailsOuterWrapper>
                    )}
                </div>


            ) : (
                {
                    ...(!addUser ? (
                        <InnerWrapper>
                            <Title>Add Project</Title>
                            <AddWrapper>
                                <AddProjectInner>
                                    <Form>
                                        <Field>
                                            <input
                                                type="file"
                                                id="file"
                                                ref={inputFile}
                                                style={{display: "none"}}
                                                onChange={(e) => setProjectImage(e.target.files[0])}

                                            />
                                            <UploadDocument onClick={onButtonClick}>
                                                <UploadText>upload image</UploadText>
                                                <UploadImage src={upload}/>
                                            </UploadDocument>
                                        </Field>
                                    </Form>

                                    <SaveButton onClick={async () => {
                                        AddProject()
                                    }}>save</SaveButton>
                                </AddProjectInner>
                                <WrapperRight>
                                    <SearchbarName sendDataToParent={sendDataToParent}/>
                                    <WrapperInput>
                                        <EstimateText>estimate hours</EstimateText>
                                        <WrapperHours>
                                            <InputNumber1
                                                type="text"
                                                placeholder="420"
                                                onChange={event => setEstimatedHours(event.target.value)}
                                            />
                                        </WrapperHours>
                                    </WrapperInput>
                                </WrapperRight>
                            </AddWrapper>

                            <ButtonWrapper>
                                <Button
                                    onClick={() => {
                                        setAddUser(false);
                                        setOverlayOpacity(1);
                                        getUsers().then(r => console.log('s'))
                                    }}
                                >
                                    <ButtonText>
                                        +
                                    </ButtonText>
                                </Button>
                            </ButtonWrapper>
                        </InnerWrapper>
                    ) : (
                        <InnerWrapper>
                            <AddUserBox>
                                <FlexRow1>
                                    <AddUserToProject>Add User to Project</AddUserToProject>
                                    <Close onClick={() => setAddUser(false)} src={close}/>
                                </FlexRow1>
                                <SearchUser placeholder="search user"></SearchUser>
                                <BottomBox>
                                    <BottomBoxInner>

                                        <FlexGrid>
                                            {userData[0].map(person =>
                                                <ProfileWrapper id={person.id} show={show} onClick={() => {
                                                    console.log(person.id)

                                                    {
                                                        (document.getElementById(person.id).style['border-style'] === 'solid') ? (

                                                            document.getElementById(person.id).style['border-style'] = 'none',
                                                                addUserToProject = addUserToProject.filter(item => item !== person.id),
                                                                console.log(addUserToProject)


                                                        ) : (
                                                            document.getElementById(person.id).style['border-style'] = 'solid',
                                                                addUserToProject.push(person.id),
                                                                console.log(addUserToProject)

                                                        )
                                                    }

                                                }}>
                                                    <AdminWrapper>

                                                        <LoginHannes/>
                                                    </AdminWrapper>
                                                    <ProfileName>
                                                        {person.first_name}
                                                    </ProfileName>

                                                </ProfileWrapper>
                                            )}
                                        </FlexGrid>
                                    </BottomBoxInner>

                                </BottomBox>
                            </AddUserBox>

                            <Title>Add User</Title>
                            <AddWrapper>
                                <AddProjectInner>
                                    <Form>
                                        <Field>
                                            <input
                                                type="file"
                                                id="file"
                                                ref={inputFile}
                                                style={{display: "none"}}
                                            />
                                            <UploadDocument onClick={onButtonClick}>
                                                <UploadText>upload image</UploadText>
                                                <UploadImage src={upload}/>
                                            </UploadDocument>
                                        </Field>
                                    </Form>

                                    <SaveButton onClick={() => setAddPro(false)}>save</SaveButton>
                                </AddProjectInner>
                                <WrapperRight>
                                    <SearchbarName/>
                                    <WrapperInput>
                                        <EstimateText>estimate hours</EstimateText>
                                        <WrapperHours>
                                            <InputNumber1
                                                type="text"
                                                placeholder="420"
                                            ></InputNumber1>
                                        </WrapperHours>
                                    </WrapperInput>
                                </WrapperRight>
                            </AddWrapper>

                            <ButtonWrapper>
                                <Button
                                    onClick={() => {
                                        setAddUser(true);
                                        setOverlayOpacity(0.45);
                                    }}
                                >
                                    <ButtonText>
                                        +
                                    </ButtonText>
                                </Button>
                            </ButtonWrapper>
                        </InnerWrapper>
                    )),
                }
            )}
        </OuterWrapper>
    );
};

export default Projects;
