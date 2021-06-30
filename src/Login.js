import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function Login() {

  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch('')
        .then(() => {
          setDone(true);
        });
    }, 1000);
  }, []);

  return (
    <>
      {
        !done ?
          <ReactLoading className="loadingcenter" type={"spin"} color={"#30409f"} height={100} width={100} />
          :
          <ul>
            <AppContainer>
              <AccountBox />
            </AppContainer>
          </ul>
      }
    </>

  );
}

export default Login;
