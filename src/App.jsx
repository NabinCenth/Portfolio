import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
<ProjectCard title="ChatVibes" image={projectimg} description="It is a well known website for chatting" link='https://chat-vibes.netlify.app/'/>
    </>
  )
}

export default App
