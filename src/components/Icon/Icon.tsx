import React, { FC } from 'react';


type IconPropsType = {
  name: string,
}

const Icon: FC<IconPropsType> = ({name}) => {
  return (
    <i
      className={`fa fa-${name}`} />
  );
};

export default Icon;