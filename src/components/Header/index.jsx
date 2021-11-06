import { Container } from "./header"
import { GoChecklist } from 'react-icons/go'
import { GiCheckMark } from 'react-icons/gi'

export function Header({newTaskTitle, setNewTaskTitle, handleCreateTask}){
  return (
    <Container>
    <div className="logo">
      <h1> My TODO</h1>
      <GoChecklist className="icon"/> 
    </div>
    
    <div className="input-group">
      <input 
        type="text" 
        value={newTaskTitle} 
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Insira a tarefa..."
      />
      <button onClick={handleCreateTask}><GiCheckMark className="icon"/></button>
    </div>
    </Container>
  )
}