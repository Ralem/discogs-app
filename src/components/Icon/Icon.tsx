import { HTMLAttributes } from "react";
import tw, { styled } from "twin.macro";

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  iconId?: string;
}

const Icon = ({ iconId, ...svgProps }: IconProps = {}) => {
  return (
    <StyledSVG {...svgProps}>
      <use xlinkHref={`#icon-${iconId}`}></use>
    </StyledSVG>
  );
};

const StyledSVG = styled.svg([
  tw`inline-block w-[1em] h-[1em] stroke-current fill-current `,
]);

export default Icon;
