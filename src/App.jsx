import { useState } from 'react'
import './App.css'
import projectimg  from './assets/project1.png'
import Nav from './assets/Component/Nav.jsx'
import Card from './assets/Component/Card.jsx'
import ProjectCard from './assets/Component/ProjectCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Nav/>
   <Card/>
   <div className="projects">
    <h3>Projects
    </h3>
    <p>A showcase of engineering precision and aesthetic clarity.</p></div>
<div className="projectslist"> 
  <ProjectCard className='chatvibes' title="ChatVibes"
   image={projectimg} 
   description="Real-time chat app using React and a Node/Express socket server. Supports instant messaging with a simple and clean UI"
  link="https://chat-vibes.netlify.app/"
  />
 
 </div>   
 
  </>
  )
}

export default App
