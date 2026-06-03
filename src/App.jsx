import {useState, useEffect} from 'react'

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
  const savedIngredients =
    localStorage.getItem("ingredients");

  return savedIngredients
    ? JSON.parse(savedIngredients)
    : [];
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

useEffect(() => {
  localStorage.setItem(
    "ingredients",
    JSON.stringify(ingredients)
  );
}, [ingredients]);

const addIngredient = (e) => {
  e.preventDefault();

  const newIngredient = {
    id: Date.now(),
    ...formData,
  };

  setIngredients([
    ...ingredients,
    newIngredient,
  ]);

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


  return (
    <div>

    </div>
  )
}

export default App