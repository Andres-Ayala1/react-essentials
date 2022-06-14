
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen!!!</h1>
    </header>
  );
}
const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Kimchi Fries",
  "Viet Iced Coffee"
];

const dishObjects = dishes.map((dish,i) => ({id: i, title: dish}));
function Main(props) {
  return (
    <section>
      <p>We serve the most delicious food around!</p>
      <img src="https://github.com/Andres-Ayala1.png" 
      alt="Headshot of Andres Ayala" 
      height ={200} />
      <ul style={{ textAlign: "left"}}>
        {props.food.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer (props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main food={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
