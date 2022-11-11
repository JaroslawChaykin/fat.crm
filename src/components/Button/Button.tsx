import React, { FC } from 'react';
import './Button.styles.scss';

type ButtonTypeProps = {
  rounded?: boolean,
  outline?: boolean,
  primary?: boolean,
  icon?: string,
  size?: 'large' | 'small' | 'medium',
  text: string,
  disabled?: boolean,
  active?: boolean,
  href?: string,
  onClick?: () => void
}

export const Button: FC<ButtonTypeProps> = ({
                                              rounded,
                                              outline,
                                              primary,
                                              icon,
                                              size = 'small',
                                              text,
                                              disabled,
                                              active,
                                              href,
                                              onClick,
                                              ...props
                                            }) => {

  const Tag = href ? 'a' : 'button';

  const classList = [
    rounded && 'btn-rounded',
    outline && 'btn-outline',
    primary && 'btn-primary',
    `btn-${size}`,
    active && 'active'
  ].filter(Boolean);

  return (
    <Tag
      href={href}
      className={`btn ${classList.join(' ')}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{text}</span>
    </Tag>
  );
};