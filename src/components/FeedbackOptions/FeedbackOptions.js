import { Buttons } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, feedback }) => {
  return (
    <Buttons>
      {options.map(option => (
        <button
          key={option}
          onClick={() => {
            feedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </Buttons>
  );
};
