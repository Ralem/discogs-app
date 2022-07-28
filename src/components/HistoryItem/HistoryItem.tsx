import Icon from "../../components/Icon";
import tw, { styled } from "twin.macro";
import { HTMLAttributes, MouseEvent } from "react";

export interface HistoryItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onRemoveClick?: (event: MouseEvent<HTMLOrSVGElement>) => void;
}

const HistoryItem = ({
  children,
  onRemoveClick,
  ...wrapperProps
}: HistoryItemProps = {}) => {
  const handleRemoveClick = (event: MouseEvent<HTMLOrSVGElement>) => {
    onRemoveClick?.(event);
  };

  return (
    <Wrapper {...wrapperProps}>
      <StyledIcon iconId="x-circle" onClick={handleRemoveClick} />
      <Term>{children}</Term>
    </Wrapper>
  );
};

const Wrapper = styled.div([
  tw`flex items-center select-none cursor-pointer font-semibold text-pentalog-shark hover:(text-pentalog-blue)`,
]);
const Term = styled.p([tw`block`]);
const StyledIcon = styled(Icon)([
  tw`mr-3 text-gray-300 hover:(text-pentalog-orange)`,
]);

export default HistoryItem;
