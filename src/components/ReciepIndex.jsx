import React from "react";

const ReciepIndex = ({alphaIndex}) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "I",
    "J",
    "k",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = 0;
  return (
    <div className="items">
      {alpha.map((item) => {
        return (
          <div className="numbox" key={num++} onClick={()=>alphaIndex(item)}>
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ReciepIndex;
