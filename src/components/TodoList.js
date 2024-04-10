import React, { useState } from 'react'

const TodoList = ({todos, handleComplete }) => {
      
  return (
          <div>
            <h3>해야 할 일</h3>
            <ul>
              {todos.map((todos, index) => (
                <li key={index}>
                    {todos.content}
                  <button onClick={() => handleComplete(todos.id)}>
                    완료
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      }

export default TodoList
