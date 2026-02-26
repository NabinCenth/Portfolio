import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import './App.css';
import projectimg from './assets/project1.png';
import Nav from './assets/Component/Nav.jsx';
import Card from './assets/Component/Card.jsx';
import ProjectCard from './assets/Component/ProjectCard.jsx';
import veddropImg from './assets/VedDrop-Preview.png';

ReactGA.initialize("G-3Q8DEXJ2VE");
ReactGA.send("pageview");

function App() {
  const portfolioUrl = "https://bedprasadpokharel.com.np/";

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Nabin Pokharel | Full Stack Developer Portfolio</title>
          <meta name="description" content="Portfolio of Nabin Pokharel (NabinCenth). Expert in React, Node.js, and engineering high-performance web applications like ChatVibes and VedDrop." />
          <link rel="canonical" href={portfolioUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={portfolioUrl} />
          <meta property="og:title" content="Nabin Pokharel | Engineering Precision" />
          <meta property="og:description" content="Explore my projects and web engineering work." />
          <meta property="og:image" content={`${portfolioUrl}og-image.png`} />
        </Helmet>

        <Nav />
        <main>
          <Card />
          <section className="projects" aria-labelledby="project-heading">
            <h3 id="project-heading">Projects</h3>
            <p id="project-descrip">A showcase of engineering precision and aesthetic clarity.</p>
      <section className="projectslist" aria-label="Portfolio Projects">
  <ProjectCard 
    title="ChatVibes | Real-Time React Chat Application"
    image={projectimg}
    altText="Interface screenshot of ChatVibes messaging app"
    description="A high-performance real-time chat application built with React and Node.js. Features instant messaging via Socket.io with a focus on clean UI and seamless user experience."
    link="https://chat-vibes.netlify.app/"
    category="Web Communication App"
    tags={ ["React", "Socket.io", "Node.js", "Express"]}
  />

  <ProjectCard 
    title="VedDrop | Secure PIN-Based File Sharing"
    image={veddropImg}
    altText="VedDrop secure file transfer dashboard"
    description="Privacy-focused file sharing platform. Securely upload files and transfer via temporary PIN without account creation. Features auto-expiring links for maximum data security."
    link="https://veddrop.netlify.app/"
    category="Cybersecurity & File Sharing"
    tags={["Privacy", "File Transfer", "Web Security"]}
  />
</section>
          </section>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
