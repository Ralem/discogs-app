import { FocusEvent, HTMLAttributes, InputHTMLAttributes, useRef } from "react";
import tw, { styled } from "twin.macro";

type iHTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface iInputProps extends iHTMLInputProps {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

const Input = ({ wrapperProps = {}, ...inputProps }: iInputProps = {}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleWrapperFocus = (e: FocusEvent<HTMLDivElement, Element>) => {
    inputRef?.current?.focus?.();
    wrapperProps?.onFocus?.(e);
  };

  return (
    <Wrapper {...wrapperProps} onFocus={handleWrapperFocus} tabIndex={-1}>
      <StyledInput ref={inputRef} type="text" {...inputProps} />
    </Wrapper>
  );
};

const Wrapper = styled.div([tw`p-2 bg-white/50`]);

const StyledInput = styled.input([
  tw`w-full h-full outline-none bg-transparent`,
]);

export default Input;
