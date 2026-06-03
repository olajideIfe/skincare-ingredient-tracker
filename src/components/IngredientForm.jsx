import React from "react";

const IngredientForm = ({ formData, handleChange, addIngredient }) => {
  return (
    <form
      onSubmit={addIngredient}
      className="
      bg-white
      p-8
      rounded-3xl
      shadow-lg
      mb-8
      "
    >
      <h2 className="text-3xl font-bold mb-6">🧴 Add Ingredient</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="ingredientName"
          placeholder="Ingredient Name"
          value={formData.ingredientName}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="text"
          name="inciName"
          placeholder="INCI Name"
          value={formData.inciName}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="functionType"
          value={formData.functionType}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">Function</option>

          <option>Humectant</option>

          <option>Emollient</option>

          <option>Occlusive</option>

          <option>Antioxidant</option>

          <option>Exfoliant</option>
        </select>

        <select
          name="safetyLevel"
          value={formData.safetyLevel}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">Safety Level</option>

          <option>Safe</option>

          <option>Use Carefully</option>

          <option>Irritant</option>
        </select>

        <select
          name="skinType"
          value={formData.skinType}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">Skin Type</option>

          <option>Dry Skin</option>

          <option>Oily Skin</option>

          <option>Combination Skin</option>

          <option>Sensitive Skin</option>
        </select>
      </div>

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        className="
        border
        p-4
        rounded-xl
        w-full
        mt-4
        "
      />

      <button
        type="submit"
        className="
        bg-green-600
        text-white
        px-8
        py-3
        rounded-xl
        mt-6
        "
      >
        {editingId ? "Update Ingredient" : "Add Ingredient"}
      </button>
    </form>
  );
};

export default IngredientForm;
