import { AllFeedback } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <AllFeedback>
      <h2>{title}</h2>
      <div>{children}</div>
    </AllFeedback>
  );
};
