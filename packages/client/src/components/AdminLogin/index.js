import React, {useEffect, useState} from "react";
import axios from "axios";
import 'regenerator-runtime/runtime'

import {
  Admin,
  AdminWrapper,
  FlexRow,
  InnerWrapper,
  LoginCard,
  LoginCardSelected,
  LoginCardWrapper,
  LoginHannes,
  Page,
  ProfileName,
  ProfileWrapper,
  Role,
  UserWrapper,
} from "./adminLogin";

import SearchBar from "./../SearchBar/index";
import AdminSvg from "../../../assets/admin.svg";

import Profile from "../../../assets/profile.svg";

import {Link} from "react-router-dom";

let adminData = []
let objectsData = []
let search = ''


const AdminLogin = () => {

    const [loading, setLoading] = useState(true)

    const [searchInput, setSearchInput] = useState('');

    function filterByValue(array, string) {

        let tempArray = []

        let len = array.length


        for (let i = 0; i < len; i++) {

            if ((array[i].first_name).toLowerCase().includes(searchInput) || (array[i].last_name).toLowerCase().includes(searchInput)) {

                tempArray.push(array[i])

            }

        }

        return tempArray
    }

    const sendDataToParent = (index) => { // the callback. Use a better name
        setSearchInput(index);
        search = index
        drawAdmins().then(r => {
            console.log('')
        })

    };

    const drawAdmins = async () => {


        let i = 0;
        let admins = [];
        let searchedUsers = []
        if (search === '' || search === ' ' || search === null || search === false) {
            while (i < adminData[0].length) {
                admins.push(
                    <Link
                        to={`/enterpassword`}
                        state={{user: adminData[0][i]}}

                    >
                        <ProfileWrapper>
                            <AdminWrapper>

                                <LoginHannes/>
                            </AdminWrapper>
                            <ProfileName>
                                {adminData[0][i].first_name}
                            </ProfileName>

                        </ProfileWrapper>

                    </Link>
                );
                i++;

            }
            objectsData.length = 0
            objectsData.push(admins)
        } else {
            i = 0
            searchedUsers.push(filterByValue(adminData[0], search))

            while (i < searchedUsers[0].length) {

                admins.push(
                    <Link
                        to={`/enterpassword`}
                        state={{user: searchedUsers[0][i]}}

                    >
                        <ProfileWrapper>
                            <AdminWrapper>

                                <LoginHannes/>
                            </AdminWrapper>
                            <ProfileName>
                                {searchedUsers[0][i].first_name}
                            </ProfileName>

                        </ProfileWrapper>

                    </Link>
                );
                i++;


            }
            objectsData.length = 0
            objectsData.push(admins)

        }

        return admins;
    };


    useEffect(async () => {


        const client = axios.create({
            baseURL: "http://localhost:3000/v1"
        });

        async function getPost() {

            const response = await client.get('/user');

            let responseData = []
            let len = response.data.length

            for (let i = 0; i < len; i++) {

                if (response.data[i].level === 1) {
                    responseData.push(JSON.parse(JSON.stringify(response.data[i])))

                }


            }


            return responseData

        }

        await getPost().then(r => {
            adminData.push(JSON.parse(JSON.stringify(r)))

        })

        await drawAdmins()
        setLoading(false)


    }, []);


    return (
        <Page>
            <InnerWrapper>
                <LoginCardWrapper>
                    <LoginCardSelected
                        onClick={(event) => (window.location.href = "/adminLogin")}
                    >
                        <Admin src={AdminSvg}></Admin>
                        <Role>Admin</Role>
                    </LoginCardSelected>

                    <LoginCard onClick={(event) => (window.location.href = "/userLogin")}>
                        <Admin src={Profile}></Admin>
                        <Role>User</Role>
                    </LoginCard>
                </LoginCardWrapper>
                <UserWrapper>
                    <SearchBar sendDataToParent={sendDataToParent}/>
                    <FlexRow>
                        {objectsData[0]}

                    </FlexRow>
                </UserWrapper>
            </InnerWrapper>
        </Page>
    );
};

export default AdminLogin;
