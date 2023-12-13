import { useState } from "react";

const CricleUse = () => {
  const [circles, setCircles] = useState([]);

  const handleCircle = () => {
    const newCircle = {};
    setCircles([...circles, newCircle]);
  };
  const handleColor = (index) => {
    const randomColor = "blue";
    setCircles((prevCircles) => {
      prevCircles[index].color = randomColor;
      return [...prevCircles];
    });
  };

  return (
    <div>
      {circles.map((circle, index) => (
        <div key={index}>
          <div
            className="w-24 h-24 border rounded-full"
            style={{ backgroundColor: circle.color }}
          ></div>
          <button
            onClick={() => handleColor(index)}
            className="border-2 border-red-300 p-1 rounded-md my-2"
          >
            Change Color
          </button>
        </div>
      ))}
      <button
        onClick={handleCircle}
        className="border-2 border-red-300 p-1 rounded-md m-1"
      >
        Click Here
      </button>
    </div>
  );
};

export default CricleUse;
