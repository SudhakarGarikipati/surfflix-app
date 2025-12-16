import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <h1>Vite + React</h1>*/}
      {/* <div className='bg-black'>
      <div className='w-8/12 m-auto text-left'>
        <label className='text-l font-bold text-red-500'>My first app with VIte</label>
      </div>
      <div className="text-lg text-blue-700 w-6/12 text-center m-auto">
        <button className='border-2 text-white bg-blue-600 rounded-lg m-2 p-2' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </div> */}
      <Header/>
      <Body/>
    </>
  )
}

export default App
