// import React from "react";
// import ReactDOM from "react-dom/client";

// // const myFirstElement = <h1>Hello React!</h1>;

// const myArray = ["apple", "banana", "orange"];

// const myList = myArray.map((item) => <p>{item}</p>);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(myFirstElement);
// root.render(myList);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const myElement = <h1>I Love JSX!</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const myElement = <h1 className="myclass">Hello World</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const x = 15;

// const myElement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   return <h2>Hi, I am a Car!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Car(props) {
//   return <h2>I am a {props.color} Car!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color="red" />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Car from "./Car.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Car(props) {
//   return <h2>I am a {props.brand.model}!</h2>;
// }

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang" };
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carInfo} />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Person(props) {
//   return <h2>I'm {props.name}!</h2>;
// }

// function Greeting() {
//   const name = "Jesse";
//   return (
//     <>
//       <h1>Hello!</h1>
//       <Person name={name} />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return <button onClick={shoot}>Take the shot!</button>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   };

//   return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
// 		'b' represents the React event that triggered the function.
//     In this case, the 'click' event
// 		*/
//   };

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={true} />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
//     </>
//   );
// }

// const cars = ["Ford", "BMW", "Audi"];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage cars={cars} />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={false} />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
//     </>
//   );
// }

// const cars = ["Ford", "BMW", "Audi"];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage cars={cars} />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Car(props) {
//   return <li>I am a {props.brand}</li>;
// }

// function Garage() {
//   const cars = [
//     { id: 1, brand: "Ford" },
//     { id: 2, brand: "BMW" },
//     { id: 3, brand: "Audi" },
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car key={car.id} brand={car.brand} />
//         ))}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyForm />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name1 = event.target.name;
//     const value1 = event.target.value;
//     setInputs((values) => ({ ...values, [name1]: value1 }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Enter your age:
//         <input
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyForm />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value);
//   };

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyForm />);

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <Todos todos={todos} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif",
//   };

//   return (
//     <>
//       <h1 style={{ color: "red" }}>Hello Style!</h1>
//       <p>Add a little style!</p>

//       <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
//       <p>Add a little style!</p>

//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";

// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Car from "./Car.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

import React from "react";
import ReactDOM from "react-dom/client";
import "./my-sass.scss";

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
