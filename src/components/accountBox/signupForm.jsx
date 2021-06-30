import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToForgPass } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Teljes név" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Jelszó" />
        <Input type="password" placeholder="Jelszó megerősítése" />
      </FormContainer>
      <Marginer direction="vertical" margin={30} />
      <SubmitButton type="submit">Regisztráció</SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#"> Van már fiókod? <BoldLink href="#" onClick={switchToSignin}>Bejelentkezem!</BoldLink></MutedLink>
      <MutedLink href="#" onClick={switchToForgPass}>Elfelejtetted a jelszavad?</MutedLink>
    </BoxContainer>
  );
}
