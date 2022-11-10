import React, { FC, PropsWithChildren } from 'react';
import './ButtonGroup.styles.scss';

type ButtonGroupTypeProps = {
  rounded?: boolean,
  outline?: boolean,
  primary?: boolean,
  vertical?: boolean,
  size?: 'large' | 'small' | 'medium',
}

export const ButtonGroup: FC<PropsWithChildren<ButtonGroupTypeProps>> = ({
                                                                           children,
                                                                           rounded,
                                                                           outline,
                                                                           primary,
                                                                           vertical,
                                                                           size = 'small',
                                                                         }) => {
  const classList = [
    rounded ? vertical ? 'btn-group-rounded-v' : 'btn-group-rounded' : '',
    outline ? 'btn-group-outline' : '',
    primary ? 'btn-group-primary' : '',
    `btn-group-${size}`,
  ].filter(Boolean);

  return (
    <div
      className={`btn-group ${classList.join(' ')}`}
    >
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          rounded,
          outline,
          primary
        });
      })}
    </div>
  );
};