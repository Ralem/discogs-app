const clickedCheckByClass = (target: HTMLElement, className: string) =>
  target.parentElement !== null && target.classList.contains(className);

const clickedCheckByElement = (target: HTMLElement, element: HTMLElement) =>
  !element ? true : element === target || element?.contains(target);

const clickedCheckByArray = (
  target: HTMLElement,
  toBeChecked: Array<HTMLElement | string>,
) =>
  !toBeChecked
    ? true
    : toBeChecked?.some(itemToBeChecked =>
        typeof itemToBeChecked === "string"
          ? clickedCheckByClass(target, itemToBeChecked)
          : clickedCheckByElement(target, itemToBeChecked),
      );

export const outsideElementClickedCheck = (
  target: HTMLElement,
  openedElement: HTMLElement,
  excludedElements: Array<HTMLElement | string> = [],
) => {
  return (
    !clickedCheckByElement(target, openedElement) &&
    !clickedCheckByArray(target, excludedElements)
  );
};
/**
 *
 * @param {HTMLElement} target click event target element
 * @param {HTMLElement} openedElement - The element who is opened
 * @param {Function} fn - The callback function to be executed on click outside
 * @param {HTMLElement[]|string[]} clickedElementsExcluded - Elements to be excluded from the click, usually children elements
 * @returns function call or undefined
 */
export const onOutsideElementClick = (
  target: HTMLElement,
  openedElement: HTMLElement,
  fn: () => void,
  clickedElementsExcluded: Array<HTMLElement | string> = [],
) => {
  const functionCanBeExecuted = outsideElementClickedCheck(
    target,
    openedElement,
    clickedElementsExcluded,
  );
  return functionCanBeExecuted ? fn?.() : undefined;
};
