import React from "react";

const IngredientForm = ({
  formData,
  handleChange,
  addIngredient,
  editingId,
}) => {
  return (
    <form
      onSubmit={addIngredient}
      className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl-8 ">
      <h2
     className=" text-3xl font-bold text-pink-600 mb-6 ">
        🧴 Add Ingredient
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="ingredientName"
          placeholder="Ingredient Name"
          value={formData.ingredientName}
          onChange={handleChange}
         className="border border-pink-200 p-3 rounded-xl focus:ring-4 focus:ring-pink-200 outline-none "/>

        <select
          name="functionType"
          value={formData.functionType}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl focus:ring-4 focus:ring-pink-200 outline-none ">
          <option value="" >Select Function</option>

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
         className="border border-pink-200 p-3 rounded-xl focus:ring-4 focus:ring-pink-200 outline-none ">
          <option value=""> Select Safety Level</option>

          <option>Safe</option>

          <option>Use Carefully</option>

          <option>Irritant</option>
        </select>

        <select
          name="skinType"
          value={formData.skinType}
          onChange={handleChange}
          className="border border-pink-200 p-3 rounded-xl focus:ring-4 focus:ring-pink-200 outline-none ">
          <option value="">Select Skin Type</option>

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
        className=" border border-pink-200 p-4 rounded-xl w-full mt-4 focus:ring focus:ring-pink-2 outline-none"/>

      <button
        type="submit"
        className=" bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3  rounded-xl mt-6"     >
        {editingId ? "Update Ingredient" : "Add Ingredient"}
      </button>
    </form>
  );
};

export default IngredientForm;
