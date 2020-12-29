import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span>
          <p>
            My passion for innovation, technology and design allows me to enjoy
            working on complex tasks and gives me the ability to constantly
            improve my programming skills in order to contribute to meaningful
            projects that help better the lives of others. I want to create a
            legacy that will not only help present and future generations evolve
            but also make peoples lives and adaptation to technology easier.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="/static/images/pic02.png" alt="" />
          </span>
          <p>
            To view my current work please visit my{" "}
            <a href="https://github.com/WestonJN">Github Profile</a> as well as
            my <a href="https://bitbucket.org/WestonJN/">BitBucket Profile.</a>{" "}
            I will be posting more content soon.
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span>
          <p>
            <ul>
              <li> Vanilla JavaScript</li>
              <li> NextJS</li>
              <li> Material UI</li>
              <li> MySQL</li>
              <li> Linux and Git</li>
              <li>
                {" "}
                <a href="https://www.youracclaim.com/badges/56af56bc-0c10-4678-b7ff-91fdedf71983/public_url">
                  Amazon Web Services (Certified)
                </a>
              </li>
              <li> NodeJS</li>
              <li> WordPress Websites</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/weston-nyirenda-163346b0/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/WestonJN">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main