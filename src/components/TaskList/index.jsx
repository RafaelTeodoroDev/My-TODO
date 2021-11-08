import { useEffect, useState } from "react"
import { Container } from "./tasklist"

import { FiTrash } from 'react-icons/fi'
import { CgDanger } from 'react-icons/cg'

export function TaskList({tasks, setTasks, newTaskTitle, setNewTaskTitle}){
  console.log(tasks)

  const [verifyExistsTasks, setVerifyExistsTasks] = useState(true)
  
  useEffect(() => {
    if(tasks > [0]){
      setVerifyExistsTasks(true)
    } else {
      setVerifyExistsTasks(false)
    }
  },[tasks])

  

  function handleRemoveTask(id){
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  function handleCompleteTask(id){
    const newTask = tasks.map(task => task.id == id ? { ...tasks, isCompleted: !task.isCompleted} : task)

    setTasks(newTask)
  }

  return (
    <Container>

      {verifyExistsTasks === true ? null : 
        <div className="verify-exists">
          <CgDanger className="icon"/> 
          <h1>No momento não tem nenhuma tarefa em ação</h1>
        </div>
      }
      
      {tasks.map((task, key) => {
        return (
          <div className="container">
            <div className={task.isCompleted ? 'completed' : ''}>
              <div className="content">
                <div className="first-content">                 
                  <button onClick={() => handleCompleteTask(task.id)}></button>
                  <p>{task.title}</p>
                  <span></span>
                </div>  
                
                <button onClick={() => handleRemoveTask(task.id)}><FiTrash className="icon"/></button>
              </div>
            </div>
          </div>
        )
      })}
    </Container>
  )
};

