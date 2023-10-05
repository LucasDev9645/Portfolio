import * as S from "./styled";

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => {
  return <S.TagSkillsStyle>{children}</S.TagSkillsStyle>;
};

export default Tag;
