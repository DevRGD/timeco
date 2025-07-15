import React from 'react';
import { IconWrapper } from '../lib/IconWrapper';

export function Home({ className }) {
  return (
    <IconWrapper className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </IconWrapper>
  );
}
