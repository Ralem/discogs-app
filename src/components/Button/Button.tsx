import tw, { styled } from "twin.macro";

export interface ButtonProps {
  children?: React.ReactNode;
}

const Button = styled.button(() => [tw`table bg-red-300`]);

export default Button;
