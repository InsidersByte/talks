import React from 'react';
import { Heading } from 'spectacle';

const Title = ({ children, ...props }) => (
  <Heading {...props} size={1} caps>{children}</Heading>
);

export default Title;
