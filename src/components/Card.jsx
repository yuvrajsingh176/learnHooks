const Card = (value) => {
  const { restaurant_name, image, rating, dishes_offered } = value.value;
  //array destructuring
  return (
    <div className="h-56 w-56 border-2 border-solid border-black">
      <img className="h-1/2 w-full" src={image} alt="" />
      <div className="bg-[#f87171] h-1/2 p-2">
        <p>{restaurant_name}</p>
        <p>{rating} ⭐</p>
        <p className="line-clamp-2">{dishes_offered.join(", ")}</p>
      </div>
    </div>
  );
};

export default Card;
