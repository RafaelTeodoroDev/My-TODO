import { GlobalStyles } from './styles/global'

import { TaskList } from './components/TaskList'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateTask(){
    if(newTaskTitle !== ''){
      setTasks([{
        id: Math.random() * 10,
        title: newTaskTitle,
        isCompleted: false,
      } ,...tasks])
  
      setNewTaskTitle('')
    } else {
      alert('Insira uma tarefa')
    }
  }

  return (
    <>
    <GlobalStyles />
    <Header 
      newTaskTitle={newTaskTitle} 
      setNewTaskTitle={setNewTaskTitle}
      handleCreateTask={handleCreateTask}/>
    <TaskList 
      tasks={tasks} 
      setTasks={setTasks} 
      setNewTaskTitle={setNewTaskTitle} 
      newTaskTitle={newTaskTitle}/>
    </>
  )
}

export default App;
