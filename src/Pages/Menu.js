import {useState} from 'react'

function Menu() {
const[count, setCount] = useState(0)
  return (
    <div>
        <h1> Menu Page</h1>
        <h2>{count}</h2>
        <button type='button' onClick={()=> setCount(prevCount => prevCount +1)}>+</button>
        <button type='button' onClick={()=> setCount(prevCount => prevCount -1)}>-</button>

        </div>
    
  )
}

export default Menu