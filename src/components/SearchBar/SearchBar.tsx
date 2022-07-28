import tw, { styled } from "twin.macro";
import React, { MouseEvent, useLayoutEffect, useRef } from "react";
import { ChangeEvent, FocusEvent, useState } from "react";
import { createPortal } from "react-dom";
import useDebounced from "../../hooks/useDebounce.hook";
import Input, { iInputProps, iInputRef } from "../Input";
import HistoryItem from "../HistoryItem";
import { useDispatch } from "react-redux";
import {
  deleteFromHistory,
  setSearchTerm,
} from "../../store/slices/search.slice";
import { onOutsideElementClick } from "../../utils/OpenClose";

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
  const dispatch = useDispatch();
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
    setIsHistoryVisible(false);
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

  const handleHistoryItemClick = (term: string) => () => {
    dispatch(setSearchTerm(term));
    handleSearch(term);
  };

  const handleHistoryItemRemoveClick =
    (term: string) => (event: MouseEvent<HTMLOrSVGElement>) => {
      event.stopPropagation();
      dispatch(deleteFromHistory(term));
    };

  const handleOutsideClick: EventListener = (event: Event) => {
    if (!event.target || !inputComponentRef.current?.wrapper.current) return;

    onOutsideElementClick(
      event.target as HTMLElement,
      inputComponentRef.current?.wrapper.current as HTMLElement,
      () => {
        setIsHistoryVisible(false);
      },
    );
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

      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isHistoryVisible]);

  return (
    <>
      <Input
        {...inputProps}
        ref={inputComponentRef}
        value={searchTerm}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
      />
      {isHistoryVisible &&
        historyRootEl &&
        !!history?.length &&
        createPortal(
          <HistoryContainer
            style={historyContainerBoundings}
            ref={historyContainerRef}
          >
            {history?.map(term => (
              <HistoryItem
                onClick={handleHistoryItemClick(term)}
                onRemoveClick={handleHistoryItemRemoveClick(term)}
                tabIndex={0}
                key={term}
              >
                {term}
              </HistoryItem>
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
