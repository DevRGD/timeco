import React from 'react';
import { IconWrapper } from '../lib/IconWrapper';

export function Layer({ className }) {
  return (
    <IconWrapper className={className}>
      <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
      <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
      <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
    </IconWrapper>
  );
}
