import tw, { styled } from "twin.macro";

export interface RecordDisplayProps {
  title?: string;
  coverImageSrc?: string;
}

const RecordDisplay = ({
  coverImageSrc,
  title,
  ...wrapperProps
}: RecordDisplayProps = {}) => {
  return (
    <Wrapper className="group" {...wrapperProps}>
      <RecordCover src={coverImageSrc} alt={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div([tw`relative w-36 h-36 mb-5 shadow-md bg-gray-400`]);

const RecordCover = styled.img([tw`w-full h-full object-cover`]);

export default RecordDisplay;
