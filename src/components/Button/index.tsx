export type Props = {
  name: string;
  disabled?: boolean;
};

import * as S from "./styled";

const Button = ({ name, disabled }: Props) => {
  return <S.ButtonStyled disabled={disabled}>{name}</S.ButtonStyled>;
};

export default Button;
