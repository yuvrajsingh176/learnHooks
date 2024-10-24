import Card from "./Card";
import { data } from "../../data";

const Body = () => {
  return (
    <div>
      <div className="flex gap-2">
        <button className="p-2  bg-blue-700 rounded-lg text-white">
          Filter
        </button>
        <p>Count of restaurants</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {data.map((val) => (
          <Card value={val} />
        ))}
      </div>
    </div>
  );
};

export default Body;
