/* eslint-disable react/button-has-type */

import { FC, ReactNode } from 'react';
import { BtnVariant } from '../types/enums';
import { BtnType, ButtonEventType } from '../types/types';

interface ButtonProps {
  children: ReactNode;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaLabel?: string;
  ariaSelected?: boolean;
  autoFocus?: boolean;
  btnRef?: (el: HTMLButtonElement | null) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onClick?: (event?: ButtonEventType) => void;
  role?: string;
  tabIndex?: 0 | -1;
  type?: BtnType;
  variant?: BtnVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  id,
  tabIndex,
  variant = 'primary',
  onClick,
  btnRef,
  ariaSelected,
  ariaExpanded,
  ariaControls,
  ariaLabel,
  role,
  className = '',
  autoFocus,
  disabled,
  name,
}) => (
  <button
    id={id}
    tabIndex={tabIndex}
    role={role}
    type={type}
    ref={btnRef}
    onClick={onClick}
    aria-selected={ariaSelected}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    aria-label={ariaLabel}
    autoFocus={autoFocus}
    aria-disabled={disabled || undefined}
    className={`btn btn-${variant} ${className}`}
    disabled={disabled}
    name={name}
  >
    {children}
  </button>
);

export default Button;
