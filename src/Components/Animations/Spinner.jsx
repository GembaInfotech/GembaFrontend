import React from 'react';
import { useSpring, animated } from 'react-spring';

const Spinner = () => {
  const spinnerStyle = useSpring({
    loop: true,
    to: { opacity: 1, transform: 'rotate(360deg)' },
    from: { opacity: 0.5, transform: 'rotate(0deg)' },
    config: { tension: 150, friction: 10 },
  });

  return (
    <animated.div
      style={{
        width: '50px',
        height: '50px',
        border: '5px solid #ccc',
        borderTopColor: '#333',
        borderRadius: '50%',
        margin: '0 auto',
        ...spinnerStyle,
      }}
    />
  );
};

export default Spinner;
