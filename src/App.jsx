import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
      <div  className="bg-stone-900 w-[320px] h-[500px] overflow-y-auto overflow-x-hidden p-4 box-border">
        <Todo/>
      </div>
       
    
  )
}

export default App