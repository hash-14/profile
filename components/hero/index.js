import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = ['/flutter.png', '/node.png', '/java.png', '/php.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">Hi<span>👋</span>, I am</div>
      <div className="head-text">Hassan Shaitou</div>
      <div className="sub-text">Software Engineer / Full Stack Developer</div>

      <div className="detail-text">
        <p>I am a <span>Software Engineer</span> specialized in both <span>front-end</span> and <span>back-end</span> development across platforms. Focused more on the <span>back-end</span> part.</p>
        <br />
        <p>Currently, I am exploring Spring Boot and Django to enlighten my knowledge and to make good decesions in terms of implementing applications.</p>
      </div>

      <a className="filled-btn"
        href="mailto:shaitou.hassan14@gmail.com" target="_blank" rel="noreferrer">
        Contact Me
      </a>

      <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <img src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");
