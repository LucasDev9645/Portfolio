import { TagSkillsStyle } from "./styled";

type Props = {
  children: string;
};

const Tag = ({ children }: Props) => {
  return <TagSkillsStyle>{children}</TagSkillsStyle>;
};

export default Tag;
