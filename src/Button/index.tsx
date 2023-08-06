type Props = {
  name: string;
};

import { ButtonStyled } from "./styled";

const Button = ({ name }: Props) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

export default Button;
