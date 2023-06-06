import React, { useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    const updatedData = "Example data";
    setData(updatedData);

    setShowButton(true); // Show the second button
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {showButton && <button>Another button</button>}
    </div>
  );
};

export default MyComponent;
