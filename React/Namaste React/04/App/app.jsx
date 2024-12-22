import ReactDOM from "react-dom/client";
import logo from "./logo.png";

let jsonData = {
  "cards": [
    {
      "cover": "https://tastytreatbd.com/images/detailed/127/Cakes.jpg",
      "name": "Tasty Treat",
      "desc": "Stupid Foods For Super High Price",
      "tags": ["Pizza", "Burger", "Cake", "Juice"],
      "deliveryTime": 15,
      "rating": 3.5
    },
    {
      "cover": "https://images.deliveryhero.io/image/fd-bd/LH/llwq-listing.jpg",
      "name": "Teheri Ghor",
      "desc": "Good Foods For Super Low Price",
      "tags": ["Biriany", "Roast", "Curry", "Fish", "Teheri"],
      "deliveryTime": 45,
      "rating": 4.3
    },
    {
      "cover": "https://img.freepik.com/free-photo/delicious-food-prepared-jewish-hanukkah-celebration_23-2151112396.jpg",
      "name": "Sushi Central",
      "desc": "Authentic Japanese Sushi",
      "tags": ["Sushi", "Nigiri", "Maki", "Sashimi"],
      "deliveryTime": 30,
      "rating": 4.8
    },
    {
      "cover": "https://b.zmtcdn.com/data/pictures/chains/6/20424406/577ce6a04526cb2265e60657484b33bf.jpg",
      "name": "Pasta House",
      "desc": "Italian Pasta with a Twist",
      "tags": ["Pasta", "Spaghetti", "Ravioli"],
      "deliveryTime": 20,
      "rating": 4.2
    },
    {
      "cover": "https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg",
      "name": "Burger Empire",
      "desc": "Juicy Burgers & Crispy Fries",
      "tags": ["Burger", "Fries", "Shakes"],
      "deliveryTime": 25,
      "rating": 4.5
    },
    {
      "cover": "https://igx.4sqi.net/img/general/width960/604139_RDmWvR0eb748VbrKW97qfLMn5IAAOtNbkTmrJ53zCeg.jpg",
      "name": "Curry Sensation",
      "desc": "Spicy and Flavorful Indian Dishes",
      "tags": ["Curry", "Naan", "Tandoori", "Chai"],
      "deliveryTime": 40,
      "rating": 4.6
    },
    {
      "cover": "https://b.zmtcdn.com/data/pictures/chains/8/69758/a0851850db7a86ab709b686f1e799c84.jpg",
      "name": "Green Eats",
      "desc": "Delicious and Nutritious Vegan Meals",
      "tags": ["Vegan", "Salad", "Smoothie", "Tofu"],
      "deliveryTime": 35,
      "rating": 4.9
    },
    {
      "cover": "https://s3-media0.fl.yelpcdn.com/bphoto/WNeXhj1DJ6iIbrl22Jy5MA/1000s.jpg",
      "name": "Steak Lover's Paradise",
      "desc": "Premium Cuts and Fine Dining",
      "tags": ["Steak", "Wine", "Dessert"],
      "deliveryTime": 50,
      "rating": 4.7
    },
    {
      "cover": "https://cdn.stocksnap.io/img-thumbs/960w/restaurant-food_T65Y75HO94.jpg",
      "name": "Thai Spice",
      "desc": "Exotic Flavors from Thailand",
      "tags": ["Pad Thai", "Curry", "Sticky Rice"],
      "deliveryTime": 30,
      "rating": 4.4
    },
    {
      "cover": "https://qul.imgix.net/acc3fbc8-947b-4cf8-8994-a66162c8ca96/687443_sld.jpg",
      "name": "Mexican Fiesta",
      "desc": "A Celebration of Mexican Cuisine",
      "tags": ["Tacos", "Burritos", "Guacamole"],
      "deliveryTime": 20,
      "rating": 4.0
    }
  ]
}

const Header = () => (
  <header>
    <div>
      <img src={logo} alt="logo" />
      <span className="company-name">Foodie</span>
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

const Card = ({ cover, name, desc, tags, deliveryTime, rating }) => (
  <div className="card">
    <div>
      <div className="card-image">
        <img src={cover} alt="restaurant" />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="food-tags">
          {
            tags.map((tag, index) => <span key={index} className="food-tag">{tag}</span>)
          }
        </div>
      </div>
    </div>
    <div className="card-info">
      <p className="card-info-item">{deliveryTime} mins</p>
      <p className="card-info-item">{rating} stars</p>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button>🔍</button>
    </div>

    <div className="cards-container">
      {jsonData?.cards?.map((card, index) => (
        <Card
          key={index}
          cover={card.cover}
          name={card.name}
          desc={card.desc}
          tags={card.tags}
          deliveryTime={card.deliveryTime}
          rating={card.rating}
        />
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>At Foodie, we're not just about food; we're about creating unforgettable experiences.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: contact@tastytreat.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Tasty Treat. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
