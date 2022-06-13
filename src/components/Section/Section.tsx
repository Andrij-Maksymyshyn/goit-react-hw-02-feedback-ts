import React from 'react';
import { Title } from './Section.styled';

interface Props {
  title: string,
  children: React.ReactNode,
}

const Section = ({ title, children }: Props) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);

export default Section;


