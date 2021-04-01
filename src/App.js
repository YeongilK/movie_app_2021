import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://coreanmart.com/wp-content/uploads/2020/10/Untitled-1.jpg"
  },
  {
    id: 2,
    name: "Bibimbap",
    image: "https://togodallas.com/wp-content/uploads/2020/12/0010_B12_%EB%B9%84%EB%B9%94%EB%B0%A5-.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.8
  }
]

function Food({ name, picture, rating })    // props.fav == { fav }
{
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}
      />
    ))}
  </div>
  );
}

export default App;
