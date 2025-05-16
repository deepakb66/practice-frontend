import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import UsernameGenerator from './UsernameGenerator';

declare global {
  interface Array<T> {
    myMap<U>(cb: (value: T, index: number, array: T[]) => U) : U[]
    myFilter<U>(cb: (value: T, index: number, array: T[]) => U) : U[]
  }
}

let arr = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Doe', age: 35 },
]

let names = arr.map((item) => {
  return item.name
})
console.log("Names: " + names) // ['John', 'Jane', 'Doe']
// This is a simple array of objects

arr.forEach((item) => {
  item.age += 10
})
console.log("Updated Array: ", arr) // [{ id: 1, name: 'John', age: 35 }, { id: 2, name: 'Jane', age: 40 }, { id: 3, name: 'Doe', age: 45 }]

let olderThan30 = arr.filter((item) => {
  return item.age > 30
})
console.log("Older than 30: ", olderThan30) // [{ id: 2, name: 'Jane', age: 40 }, { id: 3, name: 'Doe', age: 45 }]

let totalAge = arr.reduce((acc, item) => {
  return acc + item.age
}
, 0)
console.log("Total Age: ", totalAge) // 120

Array.prototype.myMap = function (cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr;
};

const myMap = arr.myMap((el) => el.id)
console.log("Map polyfill: ", myMap)

Array.prototype.myFilter = function (cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

const myFilter = arr.myFilter((el) => el.age > 40)
console.log("Filter polyfill: " + JSON.stringify(myFilter))


const Component = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Practice React here!</p>
    </div>
  );
}
// This is a functional component in React

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <p>Array is:</p> 
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {arr.map((item) => (
            <li key={item.id} style={{ margin: '5px 0' }}>
              {[item.id, item.name, item.age].join(', ')}
            </li>
          ))}
        </ul>
        <UsernameGenerator />
      </div>
    </div>
  );
}

export default App;
