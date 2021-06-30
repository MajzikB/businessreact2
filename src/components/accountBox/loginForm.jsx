import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgPass } = useContext(AccountContext);
  

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Jelszó" />
      </FormContainer>
      <Marginer direction="vertical" margin={30} />
      <MutedLink href="#" onClick={switchToForgPass}>Elfelejtetted a jelszavad?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Bejelentkezés</SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#"> Nincs még fiókod?{" "}<BoldLink href="#" onClick={switchToSignup}>Regisztrálj!</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
