import tw, { styled } from "twin.macro";

export interface RecordsLayoutProps {
  children?: React.ReactNode;
}

const RecordsLayout = styled.div([
  tw`max-w-7xl mx-auto pt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 content-center justify-items-center`,
]);

export default RecordsLayout;
