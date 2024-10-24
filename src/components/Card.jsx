const Card = (value) => {
  console.log(value.value);
  return (
    <div className="h-56 w-56 border-2 border-solid border-black">
      <img className="h-1/2 w-full" src={value.value.image} alt="" />
      <div className="bg-[#f87171] h-1/2 p-2">
        <p>{value.value.restaurant_name}</p>
        <p>{value.value.rating} ⭐</p>
        <p className="line-clamp-2">{value.value.dishes_offered.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
