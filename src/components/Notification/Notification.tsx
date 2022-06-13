import React from 'react';
import { P } from './Notification.styled';

interface Props {
  message: string,
}

const Notification = ({ message }: Props) => <P>{message}</P>;

export default Notification;

