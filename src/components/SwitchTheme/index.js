import * as S from "./style";
import React from "react";
import { Toggle } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";

export default function SwitchTheme() {
  return (
    <S.SwitchThemeContainer>
      <Toggle />
    </S.SwitchThemeContainer>
  );
}
