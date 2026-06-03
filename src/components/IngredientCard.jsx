import React from "react";

const IngredientCard = ({ ingredient }) => {
  return (
    <div
      className="
      bg-white
      p-6
      rounded-3xl
      shadow-lg
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        text-green-700
        mb-4
        "
      >
        🧴 {ingredient.ingredientName}
      </h2>

      <p>
        <strong>INCI:</strong> {ingredient.inciName}
      </p>

      <p>
        <strong>Function:</strong> {ingredient.functionType}
      </p>

      <p>
        <strong>Safety:</strong> {ingredient.safetyLevel}
      </p>

      <p>
        <strong>Skin Type:</strong> {ingredient.skinType}
      </p>

      <p className="mt-3">
        <strong>Notes:</strong>
      </p>

      <p>{ingredient.notes}</p>
    </div>
  );
};

export default IngredientCard;
