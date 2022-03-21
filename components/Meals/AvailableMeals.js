import Card from "../UI/Card";
import { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Loader from "../../utils/Loader";
// import { CircularProgress } from "@mui/material";
import CircularProgress from "@material-ui/core/CircularProgress";

const AvailableMeals = () => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-website-50f4c-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();
      console.log({ responseData });
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log({ loadedMeals });
      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals();
    // setLoading(false);
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price}
      // id={meal.id} // this is new!
    />
  ));

  return (
    <section className={classes.meals}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};
export default AvailableMeals;
