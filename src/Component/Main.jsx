import React, { useState, useRef } from 'react';
import { usePopper } from 'react-popper';

const PopperItem = () => {
  const [popperVisible, setPopperVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const popperTimeoutRef = useRef();

  const handleMouseEnter = () => {
    clearTimeout(popperTimeoutRef.current);
    setPopperVisible(true);
  };

  const handleMouseLeave = () => {
    popperTimeoutRef.current = setTimeout(() => {
      setPopperVisible(false);
    }, 300);
  };

  const handlePopperMouseEnter = () => {
    clearTimeout(popperTimeoutRef.current);
    setPopperVisible(true);
  };

  const handlePopperMouseLeave = () => {
    setPopperVisible(false);
  };

  return (
    <tr
      style={{ border: '1px solid black', width: '50px' }}
      ref={setReferenceElement}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <td>hello</td>
      {popperVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          onMouseEnter={handlePopperMouseEnter}
          onMouseLeave={handlePopperMouseLeave}
        >
          <div style={{ border: '1px solid black' }}>Popper content</div>
        </div>
      )}
    </tr>
  );
};


const Main = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>head</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((val, index) => (
            <PopperItem key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
