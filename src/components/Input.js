import React, { useState } from 'react'
import './Input.css'

  const Input = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [nextId, setNextId] = useState(5); 
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        addTodo({
          id: nextId, 
          content: inputValue,
          isDone: false
        });
        setNextId(prevId => prevId + 1); 
        setInputValue(''); 
      }
    };
  
    return (
      <div>
        <input 
          className='umc_input'
          type="text"
          placeholder="UMC 스터디 계획을 작성해보세요!"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    );
  };
  
  export default Input;
