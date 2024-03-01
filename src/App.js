import { useState } from "react";
import ColorBox from "./ColorBox";
import ColorPicker from "./ColorPicker";

function App() {
  const [color,setColor]=useState('')
  return (
    <div className="App">
     <ColorBox/>
     <ColorPicker/>
    </div>
  );
}

export default App;
