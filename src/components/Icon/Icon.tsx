import React, { FC } from 'react';


type IconPropsType = {
  icon: string,
}

const Icon: FC<IconPropsType> = ({icon}) => {
  return (
    <i
      className={`fa fa-${icon}`} />
  );
};

export default Icon;