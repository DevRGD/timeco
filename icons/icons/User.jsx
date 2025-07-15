import React from 'react';
import { IconWrapper } from '../lib/IconWrapper';

export function User({ className }) {
  return (
    <IconWrapper className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconWrapper>
  );
}
