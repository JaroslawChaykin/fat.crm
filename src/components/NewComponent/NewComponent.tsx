import React, { FC, PropsWithChildren } from 'react';
import './NewComponent.styles.scss';

export const NewComponent: FC<PropsWithChildren<any>> = ({children, color}) => {
  return (
    <div className="block" style={{color: color}}>
      {children}
    </div>
  );
};