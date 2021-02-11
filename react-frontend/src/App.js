import { useEffect, useState } from 'react';
import "./MagicEight.css"
import axios from 'axios';


const App = () => {
 
  let [language, setLanguage] = useState("");
  let [project, setProject] = useState("");
  let [aesthetic, setAesthetic] = useState("");
  const [shake, setShake] = useState(false);

  //shake the magic eight ball
  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  }

  const projAPI = async () => {
    animate();

    //get random aesthetic
    try {
      const aesData = await axios.get("http://localhost:5000/aesthetics");
      aesthetic = aesData.data;
      setAesthetic(aesthetic);
    } catch (error) {
      console.log(error);
    }
   

    //get random project
    try {
      const projData = await axios.get("http://localhost:5000/projects");
      project = projData.data;
      setProject(project);
    } catch (error) {
      console.log(error);
    }


    // get random language
    try {
      const langData = await axios.get("http://localhost:5000/languages");
      language = langData.data;
      setLanguage(language);
    } catch (error) {
      console.log(error);
    }
   
  }

  useEffect(() => {
    projAPI();
  }, [])


  return (
    <div className="App">
      <div className="container">
        <div className={shake ? `shake` : null}>
          <div className="ball">
            <div className="hole">
              <div className="message-holder">
                <div className="glass">
                  <p id="message">
                    You will build the most wonderfully {aesthetic} {project} ever written in
                  <a href={language.docs}>   {language.name}  </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="generate">
          <button id="generateButton" onClick={projAPI} >What will I build next?</button>
        </div>

      </div>
    </div>
  )
}

export default App;
