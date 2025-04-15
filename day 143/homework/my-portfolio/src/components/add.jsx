import React, { useState } from 'react';

const Add = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  function Addtext() {
    if (input.trim() !== '') {
      setItems([...items, input]); // add new item to the array
      setInput(''); // clear the input
    }
  }

  return (
    <div>
      <label htmlFor="inp">Add knowledge</label>
      <input id="inp" type="text" value={input}onChange={(e) => setInput(e.target.value)}/>
      <button onClick={Addtext}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Add;