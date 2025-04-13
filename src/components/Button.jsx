import React, {useContext} from 'react'
import {CounterCounter} from '../context/context'
import Components1 from './Components1'


function Button() {
    const value = useContext(CounterCounter)
  return (
    <div>
        Button
        <div>
            
        <button onClick={()=> value.setCount(value.count +1 )} > 
           
            <Components1 />
          
        </button>
        </div>
    </div>
  )
}

export default Button