// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Counter from "../src/container/counterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}
export default App;
