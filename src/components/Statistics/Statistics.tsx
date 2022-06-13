import React from 'react';
import { MenuSecond, ItemSecond } from './Statistics.styled';

interface Props {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  positivePercentage: number,
}

const Statistics: React.FC<Props> = ({ good, neutral, bad, total, positivePercentage }) => (
  <MenuSecond>
    <ItemSecond>Good: {good}</ItemSecond>
    <ItemSecond>Neutral: {neutral}</ItemSecond>
    <ItemSecond>Bad: {bad}</ItemSecond>
    <ItemSecond>Total: {total}</ItemSecond>
    <ItemSecond>Positive feedback: {positivePercentage}%</ItemSecond>
  </MenuSecond>
);

export default Statistics;

