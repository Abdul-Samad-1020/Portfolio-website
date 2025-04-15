import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Abdul.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/navbar4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} className='Abdul' alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdulsamadmughal/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/abdulsamadmughal1020"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/abdul._.samad._.mughal/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Abdul-Samad-1020/"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved  || @Abdul Samad</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
