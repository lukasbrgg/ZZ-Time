import React, {useState} from "react";

import {
  BackArrow,
  Greetings,
  Inputfield,
  InputWrapper,
  Login,
  Page,
  PasswordWrapper,
  PassworOuterWrapper,
  Picture,
  Placeholder,
  Title,
  UpperWrapper,
} from "./enterPassword";

import backArrow from "../../../../assets/backArrow.svg";
import Profile from "../../../../assets/default.png";

import {Link, useLocation} from "react-router-dom";

import axios from "axios";
import {useNavigate} from "react-router";


const EnterPassword = () => {
    const [input, setInput] = useState('')
    const [borderstyle, setBorderStyle] = useState('none')

    const navigate = useNavigate();


    const user = useLocation().state

    const tryLogin = async () => {

        const client = axios.create({
            baseURL: "http://localhost:3000/v1",
            params: {
                'email': user.user.email,
                'password': input

            }
        });

        async function auth() {

            let serverAuth = await client.get('/auth').catch(function (error) {
                setBorderStyle('solid') // this is the part you need that catches 400 request
            });

            return serverAuth.status

        }

        auth().then(r => {
            if (r === 200) {
                setBorderStyle('none')
                navigate('/dashboardAdmin', {state: user.user});

            }

        })

    }


    return (
        <Page>
            <UpperWrapper>
                <Link
                    to={{
                        pathname: `/adminLogin`,
                    }}
                >
                    <BackArrow src={backArrow}></BackArrow>
                </Link>
                <Title>Enter Password</Title>
                <Placeholder/>
            </UpperWrapper>

            <PassworOuterWrapper>
                <PasswordWrapper>
                    <Picture src={Profile}/>
                    <InputWrapper>
                        <Greetings>Ciao {user.user.first_name}</Greetings>
                        <Greetings>Password</Greetings>
                        <Inputfield borderstyle={borderstyle} type='password' placeholder="enter password"
                                    onChange={event => setInput(event.target.value)}/>
                        <Login
                            onClick={(event) => tryLogin()}
                        >
                            login
                        </Login>
                    </InputWrapper>
                </PasswordWrapper>
            </PassworOuterWrapper>
        </Page>
    );
};

export default EnterPassword;
