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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./my-sass.scss";

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

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FavoriteColor />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red",
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red",
//   });

//   const updateColor = () => {
//     setCar((previousState) => {
//       return { ...previousState, color: "blue" };
//     });
//   };

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button type="button" onClick={updateColor}>
//         Blue
//       </button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []); // <- add empty brackets here

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component1 />);

// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component1 />);

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Todos />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos2";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
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

// import { useState, useCallback } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos3";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
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

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useState, useMemo } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Home />);

// import ReactDOM from "react-dom/client";
// import useFetch from "./useFetch";

// const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Home />);

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../src/reducer/index";
import App from "../src/App";
import "./index.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
