import React from 'react';

export const Button = React.forwardRef<HTMLButtonElement>(
    ({ children }, ref) => {
      return <button ref={ref}>{children}</button>;
    }
);
  
Button.displayName = 'Button';