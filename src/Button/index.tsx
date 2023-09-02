export type Props = {
  name: string;
  disabled?: boolean;
};

import { ButtonStyled } from "./styled";

const Button = ({ name, disabled }: Props) => {
  return <ButtonStyled disabled={disabled}>{name}</ButtonStyled>;
};

export default Button;
