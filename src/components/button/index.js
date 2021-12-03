import React from 'react';
import classNames from 'classnames';

import './style.css';

const Button = ({
  className, large, outline, children, ...rest
}) => {
  const classNameList = classNames(
    { 'outline': outline },
    { 'big-button': large },
    className,
  )

  return (
    <button className={classNameList} {...rest}>{children}</button>
  )
}

export default Button