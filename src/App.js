import Array from "./components/Array";
import Header from "./components/Header";
import "./index.css"
import { createContext, useState } from "react";


export const SortingContext = createContext();

function App() {
  const algoState = useState("Selection Sort");
  const sizeState = useState(0);
  const arrState = useState([]);
  const [arr, setArr] = arrState;

  function handleSort(algoType){
    if(algoType==="Selection Sort")selectionSort(arr);
    if(algoType==="Quick Sort") quickSort(arr, 0, arr.length-1)
    if(algoType==="Merge Sort") mergeSort(arr);
    if(algoType==="Insertion Sort") insertionSort(arr);
  }

  function selectionSort(arr) {
    const array = arr.slice(); 
    for (let i = 0; i < array.length - 1; i++) {
      setTimeout(()=>{
            let minIndex = i;
          for (let j = i + 1; j < array.length; j++) {
              if (array[j] < array[minIndex]) {
                  minIndex = j;
              }
          }
          if (minIndex !== i) {
              [array[i], array[minIndex]] = [array[minIndex], array[i]];
          }
          setArr(array.slice());
      }, 250*i); 
    }   
  }

  function insertionSort(arr) {
    const array = arr.slice(); 
    for (let i = 1; i < array.length; i++) {
      setTimeout(()=>{
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
        setArr(array.slice());
      }, 500*i);
    }   
}

async function mergeSort(arr) {
  const array = arr.slice();
  const n = array.length;

  for (let width = 1; width < n; width *= 2) {
      for (let i = 0; i < n; i += 2 * width) {
          const left = array.slice(i, i + width);
          const right = array.slice(i + width, i + 2 * width);
          await merge(array, left, right, i);
      }
  }
}

async function merge(array, left, right, start) {
  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          array[k++] = left[i++];
      } else {
          array[k++] = right[j++];
      }
      setArr([...array]); 
      await new Promise(resolve => setTimeout(resolve, 200)); 
  }

  while (i < left.length) {
      array[k++] = left[i++];
      setArr([...array]);
      await new Promise(resolve => setTimeout(resolve, 200));
  }

  while (j < right.length) {
      array[k++] = right[j++];
      setArr([...array]);
      await new Promise(resolve => setTimeout(resolve, 200));
  }
}

async function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  const pivotIndex = await partition(arr, start, end);
  await quickSort(arr, start, pivotIndex - 1);
  await quickSort(arr, pivotIndex + 1, end);
}

async function partition(array, start, end) {
  const pivotValue = array[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
          [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
          pivotIndex++;
          setArr([...array]); 
          await new Promise(resolve => setTimeout(resolve, 200)); 
      }
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
  setArr([...array]); 
  await new Promise(resolve => setTimeout(resolve, 200)); 

  return pivotIndex;
}


  return (
    <SortingContext.Provider value={{algoState, sizeState, arrState, handleSort}}>
      <div className="App">
        <Header />
        <Array />
      </div>
    </SortingContext.Provider>
  );
}

export default App;
