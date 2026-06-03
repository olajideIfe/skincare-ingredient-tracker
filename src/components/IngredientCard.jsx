import React from "react";

const IngredientCard = ({ ingredient, toggleFavorite, editIngredient, deleteIngredient }) => {
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

      <div className="mt-2">
        <strong>Safety:</strong>

        <span
          className={`
      ml-2
      px-3
      py-1
      rounded-full
      text-white

      ${
        ingredient.safetyLevel === "Safe"
          ? "bg-green-500"
          : ingredient.safetyLevel === "Use Carefully"
            ? "bg-yellow-500"
            : "bg-red-500"
      }
    `}
        >
          {ingredient.safetyLevel}
        </span>
      </div>

      <p>
        <strong>Skin Type:</strong> {ingredient.skinType}
      </p>

      <p className="mt-3">
        <strong>Notes:</strong>
      </p>

      <p>{ingredient.notes}</p>

      <button
        onClick={() => toggleFavorite(ingredient.id)}
        className="
  mt-4
  px-4
  py-2
  rounded-xl
  bg-pink-500
  text-white
  "
      >
        {ingredient.favorite ? "❤️ Favorited" : "🤍 Favorite"}
      </button>

      <div className="flex gap-2 mt-4">

  <button
    onClick={() =>
      editIngredient(
        ingredient
      )
    }
    className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-xl
    "
  >
    ✏️ Edit
  </button>

  <button
    onClick={() => {

      const confirmed =
        window.confirm(
          "Delete this ingredient?"
        );

      if (confirmed) {
        deleteIngredient(
          ingredient.id
        );
      }

    }}
    className="
    bg-red-600
    text-white
    px-4
    py-2
    rounded-xl
    "
  >
    🗑 Delete
  </button>

</div>

      
    </div>
  );
};

export default IngredientCard;
