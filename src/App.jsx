import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";
import './App.css';
import projectimg from './assets/project1.png';
import Nav from './assets/Component/Nav.jsx';
import Card from './assets/Component/Card.jsx';
import ProjectCard from './assets/Component/ProjectCard.jsx';

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
            <div className="projectslist">
              <ProjectCard 
                title="ChatVibes"
                image={projectimg}
                description="Real-time chat app using React and a Node/Express socket server. Supports instant messaging with a simple and clean UI."
                link="https://chat-vibes.netlify.app/"
                category="CommunicationApplication"
              />
            </div>
          </section>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
