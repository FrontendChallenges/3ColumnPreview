import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Btn({ title, textColor }) {
  const [isHover, setIsHover] = useState(false);

  const toggler = (e) => {
    if (e.type === 'mouseenter') setIsHover(true);
    if (e.type === 'mouseleave') setIsHover(false);
  };
  return (
    <Button
      variant='snow'
      className={isHover ? 'text-white' : textColor}
      onMouseEnter={toggler}
      onMouseLeave={toggler}
    >
      {title}
    </Button>
  );
}

export default Btn;
