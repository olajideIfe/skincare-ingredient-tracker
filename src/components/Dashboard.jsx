import React from 'react'

const Dashboard = ({
  totalIngredients,
}) => {
  return (
    <div
      className="
      bg-white
      p-6
      rounded-3xl
      shadow-lg
      mb-8
      "
    >
      <h2 className="text-xl font-semibold">
        📊 Dashboard
      </h2>

      <p className="text-4xl font-bold mt-2">
        {totalIngredients}
      </p>

      <p>Total Ingredients</p>
    </div>
  );
};

export default Dashboard;