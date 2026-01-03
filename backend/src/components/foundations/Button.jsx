// src/components/foundations/Button.jsx
'use client';

import clsx from "clsx";

export function Button({
  variant = 'fill',
  size = 'md',
  radius = '8',
  gap = 'fixed',
  iconLeft,
  iconRight,
  children,
  onClick,
  ...props
}) {
  const base = 'btn';

  const variantClass = {
    fill: 'btn-fill',
    outline: 'btn-outline',
    text: 'btn-text',
    ghost: 'btn-ghost',
    accent: 'btn-accent',
  }[variant];

  const sizeClass = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }[size];

  const radiusClass = `radius-${radius}`;

  const gapClass =
    gap === 'by-size'
      ? {
          sm: 'gap-sm',
          md: 'gap-md',
          lg: 'gap-lg',
          xl: 'gap-xl',
        }[size]
      : 'gap-fixed';

  return (
    <button
      onClick={onClick}
      className={clsx(
        base,
        variantClass,
        sizeClass,
        radiusClass,
        gapClass
      )}
      {...props}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
}