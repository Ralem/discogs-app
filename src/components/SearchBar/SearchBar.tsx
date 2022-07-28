import tw, { styled } from "twin.macro";
import React, { useLayoutEffect, useRef } from "react";
import { ChangeEvent, FocusEvent, useState } from "react";
import { createPortal } from "react-dom";
import useDebounced from "../../hooks/useDebounce.hook";
import Input, { iInputProps, iInputRef } from "../Input";

export interface SearchBarProps extends iInputProps {
  onSearch?: (term: string) => void;
  history?: string[];
  searchTerm?: string;
}

const SearchBar = ({
  history,
  searchTerm,
  onSearch,
  ...inputProps
}: SearchBarProps = {}) => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [historyContainerBoundings, setHistoryContainerBoundings] = useState<
    Partial<DOMRect>
  >({});
  const historyContainerRef = useRef<HTMLDivElement>(null);
  const historyRootEl = document.getElementById("root");
  const inputComponentRef = useRef<iInputRef>(null);

  const handleSearch = (searchTerm: string) => {
    onSearch?.(searchTerm);
    inputComponentRef.current?.input?.current?.blur();
  };
  const debouncedHandleSearch = useDebounced(handleSearch);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputProps?.onChange?.(event);
    debouncedHandleSearch(event.target.value);
  };
  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    inputProps?.onFocus?.(e);
    setIsHistoryVisible(true);
  };
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    inputProps?.onBlur?.(e);
    if (e.relatedTarget !== historyContainerRef.current)
      setIsHistoryVisible(false);
  };

  useLayoutEffect(() => {
    if (isHistoryVisible) {
      const inputWrapperBoundings =
        inputComponentRef.current?.wrapper.current?.getBoundingClientRect() || {
          width: 0,
          top: 0,
          height: 0,
          left: 0,
        };
      setHistoryContainerBoundings({
        left: inputWrapperBoundings.left,
        top: inputWrapperBoundings.top + inputWrapperBoundings.height,
        width: inputWrapperBoundings.width,
      });
    }
  }, [isHistoryVisible]);

  return (
    <>
      <Input
        {...inputProps}
        ref={inputComponentRef}
        value={searchTerm}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        wrapperProps={{ tw: "border border-pentalog-shark bg-red-400" }}
      />
      {isHistoryVisible &&
        historyRootEl &&
        createPortal(
          <HistoryContainer
            style={historyContainerBoundings}
            ref={historyContainerRef}
          >
            {history?.map(term => (
              <p tabIndex={0} key={term}>
                {term}
              </p>
            ))}
          </HistoryContainer>,
          historyRootEl,
        )}
    </>
  );
};

const HistoryContainer = styled.div(
  tw`absolute w-20 left-0 top-0 p-4 border border-pentalog-shark shadow-sm text-pentalog-orange bg-white`,
);

export default SearchBar;
