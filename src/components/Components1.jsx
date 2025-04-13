import React,{useContext} from 'react'
import {CounterCounter} from '../context/context'


function Components1() {

    const value = useContext(CounterCounter)
  return (
    <div>
       count is {value.count}
    </div>
  )
}

export default Components1