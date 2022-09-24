import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  {
    title: "Fullstack Developer",
    company: "Cognitus - France",
    duration: "May 2015 - October 2017",
    desc: "I worked as a Full Stack Developer at Cognitus, a startup company to build and deliver big data solutions and training sessions.",
    tags: ["Hadoop", "Kafka", "Spark", "Storm", "Docker", "Kubernetes", "Express.js", "JavaScript", "NodeJS"],
  },
  {
    title: "R & D Software Engineer",
    company: "Rubix - Econocom - Lebanon",
    duration: "December 2017 - February 2018",
    desc: "I worked as R & D at Rubix , my research was to figure out a better way about search.",
    tags: ["ElasticSearch", "Kibana", "Logstash", "AngularJS"],
  },
  {
    title: "Senior Backend Engineer",
    company: "Anghami - UAE",
    duration: "March 2019 - present",
    desc: "It is true the title is Senior Backend Engineer, but I am in charge of frontend side too. Owning the Dashboard for artist built using AngularJS as frontend and PHP as backend. Also worked as flutter developer to assist in having our artist mobile application. On another side I worked with different teams as backend engineer, core API team, ingestion team, content engineering team and the current dashboard team.",
    tags: ["PHP", "Laravel", "AngularJS", "MySQL", "Datadog", "Cron Jobs", "ReactJS", "AngularJS", "Redux", "Flutter", "Go", "Amazon SQS", "DynamoDB", "Redshift", "Spring Boot", "Redis"],
  },
  {
    title: "Team Lead",
    company: "IDEAS - USA",
    duration: "February 2021 - present",
    desc: "I am working as a Team lead handling different projects as Web and Mobile from a side and Devops from the other side. We start our projects by well understanding the customer needs, and draw UML, class, and Flow Diagrams and get the approval of that with the client. After that a wireframing and UI/UX will be designed so we show the client a visualized demo on how the application will look like as in web and mobile. Lastly we start desiging and coding both front-end and back-end and we deliver to the client always before the due date.",
    tags: ["Digital Ocean", "GCP", "Firebase", "ElasticSearch", "Kibana", "JAVAEE", "Spring Boot", "Postgresql", "ReactJS", "NextJS", "Flutter", "GetX", "Redux", "Bootstrap", "SCSS", "JavaScript"],
  },
];

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">

              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>

              <div className="app__experiences__item__company">
                {item.company}
              </div>

              <div className="app__experiences__item__duration">
                {item.duration}
              </div>

              <div className="app__experiences__item__description">
                {item.desc}
              </div>

              <div className="app__experiences__item__tags">
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
