import React from "react";

const MealItem = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      {(!data)
        ? "Not Found Food! Search Again Please 🙂"
        : data.map((item) => {
            return (
                <div className="card">
                  <img
                    src={item.strMealThumb}
                    alt=""
                  />
                  <h3>{item.strMeal}</h3>
                </div>
              );
          })}
    </div>
  );
};

export default MealItem;
