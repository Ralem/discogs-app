import { HTMLAttributes } from "react";
import tw, { styled } from "twin.macro";

export type NavbarProps = HTMLAttributes<HTMLDivElement>;

const Navbar = ({ children, ...wrapperProps }: NavbarProps = {}) => {
  return <Wrapper {...wrapperProps}>{children}</Wrapper>;
};

const Wrapper = styled.nav([tw`px-1 py-2 bg-black`]);

export default Navbar;
