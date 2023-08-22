import { ButtonStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <ButtonStyled
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </ButtonStyled>
        );
      })}
    </>
  );
};
