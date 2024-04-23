import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")

  return (
    <div  className="flex h-screen w-full justify-center items-end" style={{backgroundColor:color}}>
      <div className="flex flex-row gap-3 mb-10 bg-black p-4 rounded-xl shadow-lg">
        <button className="rounded-lg bg-violet-600 p-2" onClick={() => {setColor("violet")}}>Violet</button>
        <button className="rounded-lg bg-indigo-600 p-2" onClick={() => {setColor("indigo")}}>Indigo</button>
        <button className="rounded-lg bg-blue-600 p-2" onClick={() => {setColor("blue")}}>Blue</button>
        <button className="rounded-lg bg-green-600 p-2" onClick={() => {setColor("green")}}>Green</button>
        <button className="rounded-lg bg-yellow-600 p-2" onClick={() => {setColor("yellow")}}>Yellow</button>
        <button className="rounded-lg bg-orange-600 p-2" onClick={() => {setColor("orange")}}>Orange</button>
        <button className="rounded-lg bg-red-600 p-2" onClick={() => {setColor("red")}}>Red</button>
      </div>
    </div>
  )
}

export default App