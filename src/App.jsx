import { useState, useEffect } from "react";
import IngredientForm from "./components/IngredientForm";
import IngredientCard from "./components/IngredientCard";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [formData, setFormData] = useState({
    ingredientName: "",
    inciName: "",
    functionType: "",
    safetyLevel: "",
    skinType: "",
    notes: "",
    favorite: false,
  });

  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem("ingredients");

    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  const addIngredient = (e) => {
    e.preventDefault();

    const newIngredient = {
      id: Date.now(),
      ...formData,
    };

    setIngredients([...ingredients, newIngredient]);

    setFormData({
      ingredientName: "",
      inciName: "",
      functionType: "",
      safetyLevel: "",
      skinType: "",
      notes: "",
      favorite: false,
    });
  };

  const totalIngredients = ingredients.length;

  return (
    <div>
      <Dashboard totalIngredients={totalIngredients} />
      <IngredientForm
        formData={formData}
        handleChange={handleChange}
        addIngredient={addIngredient}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default App;
