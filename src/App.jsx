import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        const dataObjects = data.data.data;
        //  console.log(dataObjects);

        setMeals(dataObjects);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(meals);
  }, [meals]);

  return (
    <>
      <div className="meals-app">
        <h1>Meals Here</h1>
        <div className="meals-list">
          {
            meals.map((meal) => {
              return (
                <div key={meal.idMeal} className="meal-card">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      marginBottom: "8px",
                    }}
                  />
                  <h2 className="meal-title">{meal.strMeal}</h2>
                  <p className="meal-category">{meal.strCategory}</p>
                </div>
              );
            })

            // map through the meals data and display the meals
          }
        </div>
      </div>
    </>
  );
}

export default App;
