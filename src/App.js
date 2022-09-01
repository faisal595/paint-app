
import './App.css';
import {useState} from 'react'
function App() {
const [color,setColor] = useState("white")
const [box1,setBox1] = useState("white")
const [box2,setBox2] = useState("white")
const [box3,setBox3] = useState("white")
const [text,settext] = useState("")

  return (
    <div className="App" >
    <div className="App-header" >
    <button onClick={()=>{setColor("color1");settext("Orange")}} style={{backgroundColor:"Orange"}}>Color 1</button>
    <button onClick={()=>{setColor("color2");settext("Black")}} style={{backgroundColor:"Black"}}>Color 2</button>
    <button onClick={()=>{setColor("color3");settext("purple")}} style={{backgroundColor:"purple"}}>Color 3</button>
    </div>
    {
      text?<h3>Select Colors : <span id={color}>{ text }</span> click boxes</h3>:<h3>Select any one color...</h3>
    }
    
    <div className="App-content">
    <div className="box" id={box1} onClick={()=>{setBox1(color)}}></div>
    <div className='box' id={box2} onClick={()=>{setBox2(color)}}></div>
    <div className='box' id={box3} onClick={()=>{setBox3(color)}}></div>
    </div>
    </div>
  );
}

export default App;
