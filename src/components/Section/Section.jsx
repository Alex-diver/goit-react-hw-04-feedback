import { SectTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectTitle>{title}</SectTitle>
      {children}
    </>
  );
};
