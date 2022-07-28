import { HTMLAttributes } from "react";
import tw, { styled } from "twin.macro";
import Icon from "../Icon";

export interface LoadingStateProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const LoadingState = (props: LoadingStateProps = {}) => {
  return (
    <Wrapper {...props}>
      <IconWrapper>
        <BouncingIcons iconId="disc" tw="text-pentalog-orange" />
        <BouncingIcons
          iconId="disc"
          tw="animation-delay[250ms] text-pentalog-blue"
        />
        <BouncingIcons
          iconId="disc"
          tw="animation-delay[500ms] text-pentalog-orange"
        />
      </IconWrapper>
      <Legend>Loading</Legend>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`w-full h-full flex items-center justify-center`,
]);

const BouncingIcons = styled(Icon)([tw`animate-bounce`]);
const IconWrapper = styled.div([tw`flex items-center mr-4 space-x-2 text-2xl`]);
const Legend = styled.p([tw`text-2xl`]);

export default LoadingState;
