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
  callback: () => void,
  active?: boolean
}

export const Button: FC<ButtonTypeProps> = ({
                                              rounded,
                                              outline,
                                              primary,
                                              icon,
                                              size = 'small',
                                              text,
                                              disabled,
                                              callback,
                                              active,
                                            }) => {
  const classList = [
    rounded ? 'btn-rounded' : '',
    outline ? 'btn-outline' : '',
    primary ? 'btn-primary' : '',
    `btn-${size}`,
    active ? 'active' : ''
  ].filter(Boolean);

  return (
    <button
      className={`btn ${classList.join(' ')}`}
      onClick={callback}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};