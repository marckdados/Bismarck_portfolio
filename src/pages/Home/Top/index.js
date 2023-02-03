import React from "react";
import Logo from "../../../components/Logo";
import SwitchTheme from "../../../components/SwitchTheme";
import Topics from "../../../components/Topics";
import * as S from "./style";

export default function Top() {
  return (
    <S.TopContainer>
      <Logo />
      <Topics />
      <SwitchTheme />
    </S.TopContainer>
  );
}
