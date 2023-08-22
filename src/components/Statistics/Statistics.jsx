import { StatList, StatItem, StatTitle } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      <StatTitle>{title}</StatTitle>
      <StatList>
        <StatItem>Good:{good}</StatItem>
        <StatItem>Neutral:{neutral}</StatItem>
        <StatItem>Bad:{bad}</StatItem>
        <StatItem>Total:{total}</StatItem>
        <StatItem>Positive feedback:{positivePercentage}%</StatItem>
      </StatList>
    </>
  );
};
