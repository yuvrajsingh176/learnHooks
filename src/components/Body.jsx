import Card from "./Card";
import { data } from "../../data";
import { useState } from "react";

//

const Body = () => {
  // let restaurants = data;
  const [restaurants, setRestaurants] = useState(data);

  // type[variable,function]=useState();

  //whenever a state variable changes the component rerenders and updates the values in the component
  //normal variable changes doesnot rerender the component

  // usestate hook

  const filterRestaurantData = () => {
    let temp = restaurants.filter((val) => {
      if (val.rating >= 4) {
        return val;
      }
    });
    setRestaurants(temp);
  };

  console.log("rendered");

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={filterRestaurantData}
          className="p-2  bg-blue-700 rounded-lg text-white"
        >
          Filter
        </button>
        <p>Count of restaurants {restaurants.length}</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {restaurants.map((val) => (
          <Card value={val} />
        ))}
      </div>
    </div>
  );
};

export default Body;
