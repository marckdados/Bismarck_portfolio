import * as S from "./style";
import { LogoBismaDev } from "../../imports";

export default function Logo() {
  return (
    <S.LogoContainer>
      <img src={LogoBismaDev} alt="Logo" />
    </S.LogoContainer>
  );
}
