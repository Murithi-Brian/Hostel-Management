import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Student = ({ stuentDetails: student }) => {

  return (
    <Card className="soft-card my-3 p-3 h-100">
      <Link to={`/student/${student._id}`}>
        <Image
          src="/images/hostel.jpg"
          rounded
          fluid
          alt={student.name}
          style={{ height: "180px", objectFit: "cover", width: "100%" }}
        />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Link to={`/student/${student._id}`} className="text-decoration-none">
          <Card.Title as="h5" className="mb-2">
            {student.name}
          </Card.Title>
        </Link>

        <Row className="mb-1">
          <Col className="text-muted">Room:</Col>
          <Col className="fw-bold">{student.roomNo}</Col>
        </Row>

        <Row className="mb-1">
          <Col className="text-muted">Stream:</Col>
          <Col className="fw-bold">{student.category}</Col>
        </Row>

        <Card.Text className="mt-auto">
          <small className="text-muted">Contact</small><br />
          <a href={`tel:${student.contact}`} className="fw-bold text-dark">
            {student.contact}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Student;
