import React, {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import tw, { styled } from "twin.macro";

type iHTMLInputProps = InputHTMLAttributes<HTMLInputElement>;
export interface iInputProps extends iHTMLInputProps {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export interface iInputRef {
  wrapper: { current: HTMLDivElement | null };
  input: { current: HTMLDivElement | null };
}

const Input = forwardRef<iInputRef, iInputProps>(
  ({ wrapperProps = {}, ...inputProps }: iInputProps = {}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleWrapperFocus = (e: FocusEvent<HTMLDivElement, Element>) => {
      inputRef?.current?.focus?.();
      wrapperProps?.onFocus?.(e);
    };

    useImperativeHandle(ref, () => ({
      wrapper: wrapperRef,
      input: inputRef,
    }));

    return (
      <Wrapper
        ref={wrapperRef}
        {...wrapperProps}
        onFocus={handleWrapperFocus}
        tabIndex={-1}
      >
        <StyledInput ref={inputRef} type="text" {...inputProps} />
      </Wrapper>
    );
  },
);

const Wrapper = styled.div([tw`p-2 bg-white`]);

const StyledInput = styled.input([
  tw`w-full h-full outline-none bg-transparent`,
]);

Input.displayName = "Input";

export default Input;
