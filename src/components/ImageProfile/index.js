import React from "react";
import * as S from "./style";
import { pictureProfile } from "../../imports/images-import";

export default function ImageProfile() {
  return (
    <S.ImageProfileContainer>
      <div></div>
      <img src={pictureProfile} alt="Profile Picture" />
    </S.ImageProfileContainer>
  );
}
