import React from 'react'

const TodoDonelist = ({done, removeDone}) => {
  return (
    <div>
            <h3>해낸 일</h3>
            <ul>
              {done.map((done, index) => (
                <li key={index}>
                    {done.content}
                  <button onClick={()=> removeDone(done.id)}>
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default TodoDonelist
