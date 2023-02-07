import { textTopicHowIAm, titleTopicHowIAm } from "../../imports/texts-import";
import TextTopic from "../TextTopic";
import TitleTopic from "../TitleTopic";
import * as S from "./style";

export default function BoxTopic() {
  return (
    <S.BoxTopicContainer>
      <TitleTopic title={titleTopicHowIAm} />
      <TextTopic text={textTopicHowIAm} />
    </S.BoxTopicContainer>
  );
}
