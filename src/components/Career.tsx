import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
          <br /> & Achievements
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* MERN Certification */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Development</h4>
                <h5>Certification</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed MERN stack certification covering MongoDB, Express.js, React.js, and Node.js. 
              Built full-stack applications with REST APIs, authentication, and database integration, 
              gaining practical experience in end-to-end development.
            </p>
          </div>
          
          {/* SIH */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Smart India Hackathon (SIH)</h4>
                <h5>Participant</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participated in Smart India Hackathon, working in a team to solve a real-world problem. 
              Contributed to designing and developing a functional prototype under strict time constraints, 
              focusing on problem-solving, teamwork, and rapid development.
            </p>
          </div>

          {/* TCS NQT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>TCS NQT</h4>
                <h5>Candidate</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Registered and preparing for TCS National Qualifier Test (NQT), focusing on aptitude, 
              coding, and core computer science subjects. Strengthening problem-solving and 
              logical reasoning skills for product-based roles.
            </p>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Career;