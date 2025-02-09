import React from "react";
import "./styles/MainText.css";

const MainText = () => {
  return (
    <div className="crt-text-container">
      {/* Column 1: About Me */}
      <div className="crt-column">
        <div>
          <h5>Roy Kim</h5>
          <p>
            Hi there! I’m a front-end developer based in Sydney with a passion
            for creating accessible and aesthetic web experiences.
          </p>
          <pre className="ascii-img">
            {`
           (•_•)  
           <)   )╯
            /  \\
          `}
          </pre>
        </div>

        <div>
          <h5>CONTACT</h5>
          <ul className="listing">
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com">GitHub</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
          </ul>
        </div>

        <div>
          <h5>BLOG</h5>
          <ul className="listing">
            <li>
              <a href="#">Frontend Considerations</a>
            </li>
            <li>
              <a href="#">Accessibility Guidelines</a>
            </li>
            <li>
              <a href="#">Setup Jest Guide</a>
            </li>
            <li>
              <a href="#">APAC User Conference</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Column 2: Projects */}
      <div className="crt-column">
        <h5>PROJECTS</h5>
        <div className="project">
          <p>Song Safari</p>
          <p>
            Break free from monotonous songs & explore diverse music based on
            your Spotify Playlist.
          </p>
          <p>
            <a href="https://song-safari-private.vercel.com">
              Live Site: https://song-safari-private.vercel.com
            </a>
          </p>
          <p>
            <a href="https://github.com/rkdemy/song-safari-public">
              GitHub: https://github.com/rkdemy/song-safari-public
            </a>
          </p>
        </div>
        <div className="project">
          <p>ChaseSpace</p>
          <p>A peer-to-peer marketplace connecting buyers & travelers.</p>
          <p>
            <a href="#">Live Site</a>
          </p>
          <p>
            <a href="#">GitHub</a>
          </p>
        </div>
        <div className="project">
          <p>E-commerce</p>
          <p>A modern e-commerce platform with seamless user experience.</p>
          <p>
            <a href="#">Live Site</a>
          </p>
          <p>
            <a href="#">GitHub</a>
          </p>
        </div>
      </div>

      {/* Column 3: What I'm Doing */}
      <div className="crt-column">
        <h5>WHAT I’M DOING</h5>
        <p>01 - Making a chatbot using Rasa.</p>
        <p>02 - Writing personal blogs/journals.</p>
        <p>03 - Working as a Technical Intern at Ellucian.</p>
        <p>
          04 - Riding my Duke 200 to explore NSW (Recently visited Mona Vale).
        </p>
      </div>

      {/* Column 4: What I Did */}
      <div className="crt-column">
        <h5>WHAT I DID</h5>
        <p>01 - Spoke at Ellucian’s APAC User Conference (Student Panel).</p>
        <p>02 - Got hired as a Technical Intern at Ellucian.</p>
        <p>03 - Graduated with a Bachelors in ICT from WSU.</p>
        <p>04 - Took a gap year during COVID & studied Horticulture at TAFE.</p>
      </div>
    </div>
  );
};

export default MainText;
