import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/profile-pic.png"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Hassan Shaitou.</h1>
          <p className="p-text"><span>•</span> Grad with Masters of Technology in Computer Science and Engineering.</p>
          <p className="p-text"><span>•</span> I have worked on various projects as Fullstack from Backend to mobile as Flutter Developer as well as a Web Developer.</p>
          <p className="p-text"><span>•</span> Strong knowledge and understanding of object-oriented programming, functional programming, RESTful APIs.</p>

          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["Dart, JavaScript, JAVA, PHP", "Flutter, AngularJS, Spring Boot, Laravel", "GetX, Provider, Redux", "MongoDB, Firebase, MySQL", "GCP, AWS, Digital Ocean", "ELK stack, Docker, Kubernetes",].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/hash-14' target="_blank" rel="noreferrer"
          >
            My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
