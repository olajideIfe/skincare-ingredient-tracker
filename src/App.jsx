import { useState, useEffect } from "react";
import IngredientForm from "./components/IngredientForm";
import IngredientCard from "./components/IngredientCard";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

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

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

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

    if (editingId) {
      setIngredients(
        ingredients.map((ingredient) =>
          ingredient.id === editingId
            ? {
                ...ingredient,
                ...formData,
              }
            : ingredient,
        ),
      );

      setEditingId(null);
    } else {
      const newIngredient = {
        id: Date.now(),
        ...formData,
      };

      setIngredients([...ingredients, newIngredient]);
    }

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

  const toggleFavorite = (id) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id
          ? {
              ...ingredient,
              favorite: !ingredient.favorite,
            }
          : ingredient,
      ),
    );
  };

  const favoriteIngredients = ingredients.filter(
    (ingredient) => ingredient.favorite,
  ).length;

  const filteredIngredients = ingredients.filter(
    (ingredient) =>
      ingredient.ingredientName.toLowerCase().includes(search.toLowerCase()) ||
      ingredient.inciName.toLowerCase().includes(search.toLowerCase()),
  );

  const safeIngredients = ingredients.filter(
    (ingredient) => ingredient.safetyLevel === "Safe",
  ).length;

  const cautionIngredients = ingredients.filter(
    (ingredient) => ingredient.safetyLevel === "Use Carefully",
  ).length;

  const irritantIngredients = ingredients.filter(
    (ingredient) => ingredient.safetyLevel === "Irritant",
  ).length;

  const editIngredient = (ingredient) => {
    setFormData({
      ingredientName: ingredient.ingredientName,
      inciName: ingredient.inciName,
      functionType: ingredient.functionType,
      safetyLevel: ingredient.safetyLevel,
      skinType: ingredient.skinType,
      notes: ingredient.notes,
      favorite: ingredient.favorite,
    });

    setEditingId(ingredient.id);
  };

  const deleteIngredient = (
  id
) => {
  setIngredients(
    ingredients.filter(
      (ingredient) =>
        ingredient.id !== id
    )
  );
};

  return (
    <div>
      <Dashboard
        totalIngredients={totalIngredients}
        favoriteIngredients={favoriteIngredients}
        safeIngredients={safeIngredients}
        cautionIngredients={cautionIngredients}
        irritantIngredients={irritantIngredients}
      />

      <IngredientForm
        formData={formData}
        handleChange={handleChange}
        addIngredient={addIngredient}
        editingId={editingId}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {filteredIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            toggleFavorite={toggleFavorite}
            deleteIngredient={deleteIngredient}
          />
        ))}
      </div>

      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
