import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: #b3b3b3;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 20px;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: #3e5ac9;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 94%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.8);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #3e5ac9;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 13px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  transition: all, 240ms ease-in-out;
  background: rgb(62,90,201);
  background: linear-gradient(58deg, rgba(62,90,201,1) 20%, rgba(50,68,173,1) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
