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
    <Wrapper {...wrapperProps}>
      <RecordCover src={coverImageSrc} alt={title} />
      <RecordTitle>{title}</RecordTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div([tw`relative w-36`]);

const RecordCover = styled.img([
  tw`w-36 h-36 mb-1 object-cover shadow-md bg-gray-400`,
]);

const RecordTitle = styled.p([
  tw`max-w-full text-sm font-main font-bold truncate`,
]);

export default RecordDisplay;
