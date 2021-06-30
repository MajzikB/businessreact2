import React, { useState } from "react";
import { AccountContext } from "./accountContext";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { ForgottenpassForm } from "./forgottenpassForm";
import { motion } from "framer-motion";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 400px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  position: relative;
  overflow: hidden;
  position: absolute;
  color: #333333;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 12%);
`;

const TopContainer = styled.div`
  width: 86%;  
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 800px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -322px;
  left: -180px;
  background: rgb(62,90,201);
  background: linear-gradient(58deg, rgba(62,90,201,1) 20%, rgba(50,68,173,1) 100%);
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
`;

const HeaderContainer = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h3`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 14px;
`;

const InnerContainer = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;

`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1300px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToForgPass = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgottenpass");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToForgPass };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Üdvözöllek,</HeaderText>
              <HeaderText>Siri vagyok!</HeaderText>
              <SmallText>Kérlek, jelentkezz be!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Fiók</HeaderText>
              <HeaderText>létrehozása</HeaderText>
              <SmallText>Nincs fiókod? Regisztrálj!</SmallText>
            </HeaderContainer>
          )}
          {active === "forgottenpass" && (
            <HeaderContainer>
              <HeaderText>Elfelejtetted</HeaderText>
              <HeaderText>a jelszavad?</HeaderText>
              <SmallText>Add meg a regisztrált e-mail címed!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "forgottenpass" && <ForgottenpassForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
