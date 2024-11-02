import React from 'react'
import "./header.css"
import { useContext, useEffect} from 'react'
import {SortingContext} from "../App"

function Header() {
    const {algoState, sizeState, arrState, handleSort} = useContext(SortingContext);
    const [algo, setAlgo] = algoState;
    const [size, setSize] = sizeState;
    const [arr, setArr] = arrState;


    function generateRandomArr(n){
        const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
        const result = [];
        while (result.length < n) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            result.push(numbers[randomIndex]);
            numbers.splice(randomIndex, 1); 
        }
        return result;
    }
    useEffect(()=>{
        const res = generateRandomArr(size);
        setArr(res);
      }, [size]);

  return (
    <div className="header-container">
        <div className="logo">Sorting Visualizer!</div>
        <div className="input-data">
            <label htmlFor="algo">Algorithm:</label>
            <select name="algo" className="algo" value={algo} onChange={(e)=> setAlgo(e.target.value)}>
                <option value="Selection Sort">Selection Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Quick Sort">Quick Sort</option>
            </select>
            <label htmlFor="numbers">Array Size:</label>
            <input 
                type="number" 
                max={50}
                name="numbers" 
                id="numbers" 
                value={size} 
                onChange={(e)=> setSize(e.target.value)}
            />
            <button className="go-button" onClick={()=> handleSort(algo)}>Go!</button>
        </div>
    </div>
  )
}

export default Header