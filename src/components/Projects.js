import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AmdProject.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  
  const projects = [
    {
      title: "Event Management APP (native app)",
      description: "Design & Development || React Native FireBase POSTGREYSQL NODE ",
      imgUrl: projImg1,
      Link:<a href="#">Repo link</a>,
    },
    {
      title: "Ecommerence  Startup",
      description: "Design & Development || MERN stack",
      imgUrl: projImg2,
      Link:<a href="#">Repo link</a>,
    },
    {
      title: "Online Voting System",
      description: "Design & Development || php MYSQL HTML CSS",
      imgUrl: projImg3,
      Link:<a href="#">Repo link</a>,
    },
    {
      title: "AdaptiveComputing",
      description: "AI-powered platform for mapping and suggesting accessible locations for people with disabilities."  ,
      imgUrl: projImg1,
      Link:"https://example.com/online-voting-system",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      Link:<a href="#">Repo link</a>,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      Link:<a href="#">Repo link</a>,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the real-world projects I’ve worked on — blending creativity, problem-solving, and technical expertise across web development, app development, and UI/UX design. Each project reflects my commitment to building scalable, user-centric solutions.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WEB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
