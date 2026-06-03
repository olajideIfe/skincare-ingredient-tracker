import React from "react";

const Dashboard = ({
  totalIngredients,
  favoriteIngredients,
  safeIngredients,
  cautionIngredients,
  irritantIngredients,
}) => {
  return (
    <div
      className="
      grid
      md:grid-cols-5
      gap-4
      mb-8
      "
    >

      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3>📊 Total</h3>

        <p className="text-4xl font-bold">
          {totalIngredients}
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3>❤️ Favorites</h3>

        <p className="text-4xl font-bold">
          {favoriteIngredients}
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3>🟢 Safe</h3>

        <p className="text-4xl font-bold text-green-600">
          {safeIngredients}
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3>🟡 Caution</h3>

        <p className="text-4xl font-bold text-yellow-500">
          {cautionIngredients}
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h3>🔴 Irritant</h3>

        <p className="text-4xl font-bold text-red-500">
          {irritantIngredients}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;