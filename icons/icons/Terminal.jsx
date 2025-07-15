import React from 'react';
import { IconWrapper } from '../lib/IconWrapper';

export function Terminal({ className }) {
  return (
    <IconWrapper className={className}>
      <path d="M8 9l3 3l-3 3" />
      <path d="M13 15l3 0" />
      <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    </IconWrapper>
  );
}
