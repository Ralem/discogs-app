import tw, { styled } from "twin.macro";
import Icon from "../Icon";

export interface ErrorStateProps {
  children?: React.ReactNode;
  error: Error;
}

const ErrorState = ({ error, ...props }: ErrorStateProps) => {
  return (
    <Wrapper {...props}>
      <div tw="flex flex-col items-center text-2xl text-center text-red-500">
        <Icon iconId="disc" tw=" text-4xl mb-4" />
        <p>Something Went Wrong</p>
        {error && <p tw="text-base">{error.message}</p>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`w-full flex-auto flex items-center justify-center`,
]);

export default ErrorState;
