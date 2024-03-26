import React, { ReactElement, useRef } from 'react';

export default function TestTab(): ReactElement {
  const inputRef = useRef(null);

  const handleChangeValue = () => {
    inputRef.current.value = 'New Value';
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleChangeValue}>Change Input Value</button>
    </div>
  );
}
