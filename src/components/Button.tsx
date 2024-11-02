import { forwardRef } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'sm': 'px-3 py-1.5 text-sm',
            'md': 'px-4 py-2 text-sm',
            'lg': 'px-6 py-3 text-base',
          }[size],
          {
            'primary': 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
            'secondary': 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:ring-blue-500',
            'outline': 'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus-visible:ring-blue-500',
          }[variant],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);