import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='App'>
      <Nav inputHandler={inputHandler}/>
      <Cart />
      <HomeScreen input={inputText}/>
    </div>
  );
}

export default App;
