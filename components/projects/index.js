import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  {
    title: "Anghami backend APIs - Anghami Corp (UAE)",
    desc: "The backe core of the Anghami platform written in PHP. It will be re-written using Spring Boot framework or Go as backend",
    coverUrl: "/web-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["PHP", "Spring Boot", "Go"],
  },
  {
    title: "Dashboard for Artists - Anghami Corp (UAE)",
    desc: "A web using AngularJS and PHP as backend that allows artists control all their content, with ability to upload and promote their contents.",
    coverUrl: "/web-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["PHP", "AngularJS", "AWS"],
  },
  {
    title: "Anghami for Artists App - Anghami Corp (UAE)",
    desc: "An app using Flutter with Redux, and PHP as backend that allows artists to see their dashboard easily on the app and send an edit request to the admin of any (song, bio, album ...) they want.",
    coverUrl: "/web-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["PHP", "Flutter", "AWS"],
  },
  {
    title: "An E-Commerce App - Ushopwedrop - IDEAS Corp (USA)",
    desc: "An e-commerce app using Firebase, ElasticSearch integrate backend and frontend with react, flutter. Now we are modifying the backend to use Spring Boot",
    coverUrl: "/crypto-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["Firebase", "ElasticSearch", "Spring Boot", "ReactJS", "Flutter"],
  },
  {
    title: "A Wholesale E-Commerce App - MNC/Phoenix - IDEAS Corp (USA)",
    desc: "An app for wholesalers in USA implemented using Flutter, ReactJS, Firebase, and Elasticsearch that allows users to buy products, and admin to see his dashboard integrated with their POS system.",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["Firebase", "Elasticsearch", "ReactJS", "Flutter"],
  },
  {
    title: "Big Data Lab As a Service (BDLASS) - Cognitus Company (France)",
    desc: "A website that removes the burden of installing and intiating cluster(s) of the big data technologies such as (Apache Hadoop, Storm, Kafka, Spark etc...) as microservice. Backend written in NodeJS, nano editor only (No UI), frontend as HTML, CSS, Bootstrap. Hosted on private cloud provided by the company",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["NodeJS", "Hadoop", "Kafka", "Storm", "Spark", "Docker", "Kubernetes", "Private Cloud", "SSH"],
  },
  {
    title: "Online Compilers Website - Cognitus Company (France)",
    desc: "A website that facilitates your life in writing quick and better code online, sharable between your teammates. Used private cloud and JAVAEE, sshing using shellinabox installed on the Ubuntu OS hosted on the cloud.",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["JAVAEE", "Private Cloud", "Shellinabox", "SSH"],
  },
  {
    title: "Youtube Like App - Self project (Lebanon)",
    desc: "A video app using Flutter, Dart, GetX, and Firebase that allows users to share upload and like videos. Also a small dashboard for them",
    coverUrl: "/mobile-dev.png",
    githubLink: "https://github.com/hash-14",
    demoLink: "https://github.com/hash-14",
    tags: ["Flutter", "Dart", "GetX", "Firebase", "Docker", "Kuberenetes"],
  },
];

const Projects = () => {

  return (
    <>
      <h2> My Projects </h2>

      <div className="project__works">
        {
          projects.map((project, index) => {
            return (
              <div key={index} className="project__work">
                <div className="project__work__img">
                  <Image src={project.coverUrl}
                    alt={project.title}
                    layout="fill"
                    priority
                  />
                </div>
                <div className="project__work__details">
                  <h3 className="project__work__title">{project.title}</h3>
                  <p className="project__work__desc">{project.desc}</p>

                  <a className="text-btn" href={project.githubLink} target="_blank" rel="noreferrer">
                    <BsGithub />
                    <span>GitHub repo</span>
                  </a>

                  <div className="project__work__tags">
                    {
                      project.tags.map((tag, index) => {
                        return (
                          <div key={index} className="project__work__tag">
                            <span><BsFillCheckCircleFill /></span>
                            <p className="p-text">{tag}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  <a className="outlined-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                    Demo
                  </a>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__projects"), "projects");
