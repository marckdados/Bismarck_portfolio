import BoxTopic from "../../../components/BoxTopic";
import ImageProfile from "../../../components/ImageProfile";
import * as S from "./style";

export default function Body() {
  return (
    <S.BodyContainer>
      <S.TextWhoIAmContainer>
        <BoxTopic />
        <ImageProfile />
      </S.TextWhoIAmContainer>
    </S.BodyContainer>
  );
}
