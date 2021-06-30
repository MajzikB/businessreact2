import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function ForgottenpassForm(props) {
  const { switchToForgPass } = useContext(AccountContext);
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="E-mail" />
      </FormContainer>
      <Marginer direction="vertical" margin={30} />
      <SubmitButton type="submit">Jelszó-emlékeztető küldése</SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#"> Nincs még fiókod?{" "}<BoldLink href="#" onClick={switchToForgPass}>Regisztrálj!</BoldLink></MutedLink>
      <MutedLink href="#"> Van már fiókod? <BoldLink href="#" onClick={switchToSignin}>Bejelentkezem!</BoldLink></MutedLink>
    </BoxContainer>
  );
}
