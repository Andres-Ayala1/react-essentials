import React, { useState } from "react";
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
      <p>We serve the most {props.adjective} food around!</p>
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
// THESE TWO COMPONENTS HELP US VISUALIZE CONDITIONAL RENDERING
function SecretComponent() {
  return <h1>Only authorized users can view this SECRET component</h1>;
}

function RegularComponent() {
  return <h1>Everyone can view this component</h1>;
}
// THIS IS AN EXAMPLE OF OBJECT DESTRUCTURING TO HAVE CLEANER SYNTAX WITHIN COMPONENTS
function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    /*<>
    <div className='App'>
      <Header name="Dessi"/>
      <Main food={dishObjects} adjective={"scrumptious"}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
    {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
// ^^ CONDITIONAL RENDERING OF COMPONENTS*/
  <>
  <h1>Current emotion is {emotion}.</h1>
  <button onClick={() => setEmotion("happy")}>
    Happy
  </button>
  <button onClick={() => setEmotion("frusturated")}>
    Frusturate
  </button>
  <button onClick={() => setEmotion("enthusiastic")}>
    Enthuse
  </button>
  </>
  );
}

export default App;
