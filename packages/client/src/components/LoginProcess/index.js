import React from "react";

import {
  Admin,
  ChooseLogin,
  InnerWrapper,
  LoginCard,
  LoginCardWrapper,
  LogoIMG,
  Page,
  Role,
  ZirkonzahnTitle,
} from "./LoginProcess";

import Logo from "../../../assets/logo.svg";
import AdminSvg from "../../../assets/admin.svg";

import Profile from "../../../assets/profile.svg";

const Index = () => {
    return (
        <Page>
            <InnerWrapper>
                <ZirkonzahnTitle>Zirkonzahn</ZirkonzahnTitle>
                <LogoIMG src={Logo}/>
                <ChooseLogin>choose login</ChooseLogin>
                <LoginCardWrapper>
                    <LoginCard
                        onClick={(event) => (window.location.href = "/adminLogin")}
                    >
                        <Admin src={AdminSvg}></Admin>
                        <Role>Admin</Role>
                    </LoginCard>

                    <LoginCard onClick={(event) => (window.location.href = "/userLogin")}>
                        <Admin src={Profile}></Admin>
                        <Role>User</Role>
                    </LoginCard>
                </LoginCardWrapper>
            </InnerWrapper>
        </Page>
    );
};

export default Index;
