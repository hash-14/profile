import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s build the future together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:shaitou.hassan14@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            shaitou.hassan14@gmail.com
          </a>
        </div>

      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
