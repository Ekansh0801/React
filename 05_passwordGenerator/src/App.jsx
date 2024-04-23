import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6);
  const [number,setNumber] = useState(false);
  const [specialChar,setSpecialChar] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789"
    if(specialChar) str += "~`!@#$%^&*()_+{[}]';:>.<,?/|=-"

    for(let i = 1; i <= length; i++){
       const ch = Math.floor(Math.random() * str.length + 0)
       pass += str.charAt(ch);
    }
    setPassword(pass); 
  },[length,number,specialChar,setPassword])

  useEffect(() => {passwordGenerator()},[length,number,specialChar,passwordGenerator]);

  const passRef = useRef(null)

  const copyPasstoClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  return (
         <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:"black"}}>
          <div className='bg-gray-500 h-[50%] w-[50%] rounded-xl shadow-2xl'>
             <h1 className='text-white text-center'>Password Generator</h1>
             <div className='flex'>
             <input type='input' placeholder='password' value = {password} className='outline-none' readOnly  ref={passRef}/>
             <button onClick={copyPasstoClipboard}>Copy</button>              
             </div>
             <input type='range' min={6} max={100} value={length} onChange={(e) =>{setLength(e.target.value)}}></input>
             <label>Length : {length}</label>
             <input type='checkbox' id='num' onClick={() => {setNumber((prev) => !prev)}}/>
             <label htmlFor='num'>Include Numbers</label>
             <input type='checkbox' id='special' onClick={() => {setSpecialChar((prev) => !prev)}}/>
             <label htmlFor='special'>Include Special Character</label>

          </div>
       </div>
     )
}

export default App
