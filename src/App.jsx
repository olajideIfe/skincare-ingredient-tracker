import { useState, useEffect } from "react";
import IngredientForm from "./components/IngredientForm";
import IngredientCard from "./components/IngredientCard";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [formData, setFormData] = useState({
    ingredientName: "",
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
  const [functionFilter, setFunctionFilter] = useState("All");

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
      functionType: ingredient.functionType,
      safetyLevel: ingredient.safetyLevel,
      skinType: ingredient.skinType,
      notes: ingredient.notes,
      favorite: ingredient.favorite,
    });

    setEditingId(ingredient.id);
  };

  const deleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const filteredIngredients = ingredients.filter((ingredient) => {
    const matchesSearch =
      ingredient.ingredientName.toLowerCase().includes(search.toLowerCase()) ||
      ingredient.inciName.toLowerCase().includes(search.toLowerCase());

    const matchesFunction =
      functionFilter === "All" || ingredient.functionType === functionFilter;

    return matchesSearch && matchesFunction;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-purple-10 p-6 ">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
          🧴 Skincare Ingredient Tracker
        </h1>

        <p
          className=" text-gray-600 text-lg" >
          Track ingredients, safety levels, skin compatibility and formulation
          notes.
        </p>
      </div>
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
      <br />

      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex gap-2 flex-wrap mb-8">
        <button
          onClick={() => setFunctionFilter("All")}
          className=" px-5 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition shadow-md ">
          All
        </button>

        <button
          onClick={() => setFunctionFilter("Humectant")}
          className=" px-5 py-2 rounded-full bg-pink-500 text-white transition shadow-md " >
          Humectants
        </button>

        <button
          onClick={() => setFunctionFilter("Emollient")}
          className=" px-5 py-2 rounded-full bg-pink-500 text-white transition shadow-md " >
          Emollients
        </button>

        <button
          onClick={() => setFunctionFilter("Exfoliant")}
        className=" px-5 py-2 rounded-full bg-pink-500 text-white transition shadow-md " >
          Exfoliants
        </button>

        <button
          onClick={() => setFunctionFilter("Antioxidant")}
         className=" px-5 py-2 rounded-full bg-pink-500 text-white transition shadow-md " >
          Antioxidants
        </button>
      </div>

      {filteredIngredients.length === 0 ? (
        <div
          className=" bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center shadow-lg mt-8 " >
          <h2
            className="text-3xl font-bold text-pink-600 " >
            🧴 No Ingredients Yet
          </h2>

          <p className="text-gray-600 mt-3">Add your first ingredient above.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filteredIngredients.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              ingredient={ingredient}
              toggleFavorite={toggleFavorite}
              editIngredient={editIngredient}
              deleteIngredient={deleteIngredient}
            />
          ))}
        </div>
      )}

      <footer
        className=" text-center mt-16 text-gray-600 ">
        Built with React + Tailwind CSS 💖
      </footer>
    </div>
  );
};

export default App;
