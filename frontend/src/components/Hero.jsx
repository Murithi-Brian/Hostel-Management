import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Hero = ({
  title = "Hostel Management System",
  subtitle = "Manage students, rooms, and attendance in one place.",
  image = "/images/hostel.jpg",
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
          </Col>
          <Col md={4} className="text-md-end">
            {ctaText ? (
              <Button variant="light" onClick={onCtaClick}>
                {ctaText}
              </Button>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
