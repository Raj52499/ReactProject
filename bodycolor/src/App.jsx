import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gray")
  return (<>
  <h1 className="text-white align-middle text-center py-80"    
          style={{backgroundColor:color}}>Now the color is: {color}</h1>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button
          onClick={()=> setColor('red')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=> setColor('green')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"Green"}}>Green</button>
          <button 
          onClick={()=> setColor('black')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"Black"}}>Black</button>
          <button 
          onClick={()=> setColor('pink')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"Pink"}}>Pink</button>
          <button 
          onClick={()=> setColor('orange')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"Orange"}}>Orange</button>
          <button 
          onClick={()=> setColor('Blue')} 
          className='outline-black px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"Blue"}}>Blue</button>
          <h1 className="text-white rounded-xl  px-3 py-2"    
          style={{backgroundColor:color}}>Now the color is: {color}</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
