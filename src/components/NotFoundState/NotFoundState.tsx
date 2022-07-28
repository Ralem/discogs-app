import tw, { styled } from "twin.macro";
import Icon from "../Icon";

export interface NotFoundStateProps {
  children?: React.ReactNode;
}

const NotFoundState = (props: NotFoundStateProps = {}) => {
  return (
    <Wrapper {...props}>
      <div tw="flex flex-col items-center text-2xl">
        <Icon iconId="disc" tw="text-red-500 text-4xl" />
        <p>No records to show</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`w-full flex-auto flex items-center justify-center`,
]);

export default NotFoundState;
