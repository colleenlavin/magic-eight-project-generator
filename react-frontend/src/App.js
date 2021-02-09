import { useEffect, useState } from 'react';
import "./MagicEight.css"
import axios from 'axios';



const App = () => {
  var lang = "";
  var proj = "";
  var aes = "";
  const [language, setLanguage] = useState("");
  const [project, setProject] = useState("");
  const [aesthetic, setAesthetic] = useState("");
  const [shake, setShake] = useState(false);

  const animate = () => {

    // eight ball begins to shake
    setShake(true);

    // Stops shaking after a second
    setTimeout(() => setShake(false), 1000);

  }

  //generate project
  const projAPI = async () => {
    animate();
    let arrayOfLanguages = [];
    let arrayOfProjects = [];
    let arrayOfAesthetics = [];

    //get random aesthetic
    try {
      const aesData = await axios.get("http://localhost:5000/aesthetics");
      arrayOfAesthetics = aesData.data;
    } catch (error) {
      console.log(error);
    }
    try {
      aes = arrayOfAesthetics[Math.floor(Math.random() * (arrayOfAesthetics.length))];
      setAesthetic(aes);
    }
    catch (error) {
      console.log(error)
    }

    //get random project
    try {
      const projData = await axios.get("http://localhost:5000/projects");
      arrayOfProjects = projData.data;
    } catch (error) {
      console.log(error);
    }
    try {
      proj = arrayOfProjects[Math.floor(Math.random() * (arrayOfProjects.length - 1))];
      setProject(proj);
    }
    catch (error) {
      console.log(error)
    }

    // get random language
    try {
      const langData = await axios.get("http://localhost:5000/languages");
      arrayOfLanguages = langData.data;
    } catch (error) {
      console.log(error);
    }
    try {
      lang = (arrayOfLanguages[Math.floor(Math.random() * (arrayOfLanguages.length - 1))]);
      setLanguage(lang);
      console.log(language)
    }
    catch (error) {
      console.log(error)
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
                    You will build the most {aesthetic} {project} ever written in
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
