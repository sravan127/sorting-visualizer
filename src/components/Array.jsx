import React, {useContext} from 'react'
import "./array.css"
import { SortingContext } from '../App'
import Bar from './Bar';



function Array() {
    const {arrState, algoState} = useContext(SortingContext);
    const [algo] = algoState;
    const [arr, setArr] = arrState;
  return (
    <div className="arr-container">
        {
            arr.map((val, index)=>{
                return <Bar key={index} height={val}></Bar>
            })
        }
    </div>
  )
}

export default Array