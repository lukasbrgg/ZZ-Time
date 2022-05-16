import React, {useRef, useState} from "react";

import {
  ChangeDataWrapper,
  ChangeImage,
  ChangePassword,
  ChangePictureWrapper,
  ChangePwWrapper,
  EditProfile,
  FlexColumn,
  FlexRow,
  InnerWrapper,
  InnerWrapperPW,
  InputItem,
  InputPassword,
  InputWrapper,
  Name,
  OuterWrapper,
  PB,
  PictureWrapper,
  SaveButton,
  SavePswd,
  TitleWrapper,
  UpperWrapper,
} from "./userSettings";

import jan from "../../../assets/default.png";
import {useLocation} from "react-router-dom";
import axios from 'axios'

let userData = null
let nameChange = ''
let surnameChange = ''
let emailChange = ''
let definitePW = ''
let newPwChange = ''
let newPwChangeRepeat = ''

const UserSettings = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [changePswd, setChangePswd] = useState(false);
    const [loading, setLoading] = useState(true);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const inputFile = useRef(null);

    const user = useLocation().state

    const getUserData = () => {
        // `current` points to the mounted file input element
        let config = {
            method: 'get',
            url: 'http://localhost:3000/v1/user?id=' + user.id.toString(),
            headers: {}
        };

        axios(config)
            .then(function (response) {
                userData = response.data
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    };


    const updateUser = () => {
        // `current` points to the mounted file input element
        let nameTmp = ''
        let surnameTmp = ''
        let mailTmp = ''
        let pwTmp = ''

        if (definitePW !== '') {
            pwTmp = definitePW

        } else {
            pwTmp = ''
        }

        if (nameChange !== '') {
            nameTmp = nameChange

        } else {
            nameTmp = user.first_name
        }

        if (surnameChange !== '') {
            surnameTmp = surnameChange

        } else {
            surnameTmp = user.last_name
        }

        if (emailChange !== '') {
            mailTmp = emailChange

        } else {
            mailTmp = user.email
        }

        let data

        if (pwTmp === '') {

            data = JSON.stringify({
                "first_name": nameTmp,
                "last_name": surnameTmp,
                "email": mailTmp,
                "level": 0
            });

        } else {
            data = JSON.stringify({
                "first_name": nameTmp,
                "last_name": surnameTmp,
                "email": mailTmp,
                'password': pwTmp,
                "level": 0
            });
        }

        let config = {
            method: 'put',
            url: 'http://localhost:3000/v1/user?id=' + user.id.toString(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                alert("Successfully changed!");
            })
            .catch(function (error) {
                console.log(error);
            });


    };


    getUserData()

    const checkPwInput = () => {
        if (newPwChange === newPwChangeRepeat) {

            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(newPwChange)) {

                definitePW = newPwChange
                newPwChange = ''
                newPwChangeRepeat = ''
                setChangePswd(false)

            } else {
                alert("Wrong Form. PW should be min 8 characters long and contain min one upper- and lowercase character, as well as numbers and one special sign")
            }

        } else {
            alert("Passwords don't match!:)")
        }


    };
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };


    return (
        <OuterWrapper>
            {loading ? (
                <div>
                    loading....
                </div>
            ) : (
                <InnerWrapper>
                    {changePswd ? (
                        <ChangePwWrapper>
                            <TitleWrapper>Change Password</TitleWrapper>
                            <InnerWrapperPW>
                                <InputPassword
                                    placeholder="new password"
                                    type="password"
                                    onChange={(e) => newPwChange = e.target.value}

                                ></InputPassword>
                                <InputPassword
                                    placeholder="repeat"
                                    type="password"
                                    onChange={(e) => newPwChangeRepeat = e.target.value}

                                ></InputPassword>
                                <SavePswd onClick={() => checkPwInput()}>save</SavePswd>
                            </InnerWrapperPW>
                        </ChangePwWrapper>
                    ) : (
                        <div/>
                    )}

                    <FlexColumn>
                        <UpperWrapper>
                            <EditProfile>Edit Profile</EditProfile>
                            <ChangePassword onClick={() => setChangePswd(true)}>
                                change password
                            </ChangePassword>
                        </UpperWrapper>

                        <FlexRow>
                            <ChangePictureWrapper>
                                <PictureWrapper>
                                    <PB src={jan}/>
                                    <Name>{userData[0].first_name}</Name>
                                </PictureWrapper>
                                <ChangeImage onClick={onButtonClick}>
                                    <input
                                        type="file"
                                        id="file"
                                        ref={inputFile}
                                        style={{display: "none"}}
                                    />
                                    change image
                                </ChangeImage>
                            </ChangePictureWrapper>
                            <ChangeDataWrapper>
                                <InputWrapper>
                                    <InputItem
                                        ref={inputRef1}
                                        placeholder={userData[0].first_name}
                                        onChange={(e) => {
                                            nameChange = e.target.value
                                        }}
                                    />
                                    <InputItem
                                        ref={inputRef2}
                                        onChange={(e) => surnameChange = e.target.value}
                                        placeholder={userData[0].last_name}
                                    />
                                    <InputItem
                                        ref={inputRef3}
                                        onChange={(e) => emailChange = e.target.value}
                                        placeholder={userData[0].email}
                                    />
                                    <SaveButton onClick={updateUser}>save</SaveButton>
                                </InputWrapper>
                            </ChangeDataWrapper>
                        </FlexRow>
                    </FlexColumn>
                </InnerWrapper>
            )}

        </OuterWrapper>
    );
};

export default UserSettings;
