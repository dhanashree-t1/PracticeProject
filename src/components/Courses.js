import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Courses.css"; 
import bgImage from '../assets/meetings-bg.jpg'; 

const Courses = () => {
  const courses = [
    {
      title: "Please visit our website again",
      price: "$360",
      image: require("../assets/course-a.jpg"), 
      rating: 5,
    },
    {
      title: "Responsive HTML Templates for you",
      price: "$400",
      image: require("../assets/course-b.jpg"),
      rating: 5,
    },
    {
      title: "Download Free CSS Layouts for your business",
      price: "$430",
      image: require("../assets/course-c.jpg"),
      rating: 5,
    },
    {
      title: "Morbi in libero blandit lectus cursus",
      price: "$480",
      image: require("../assets/course-d.jpg"),
      rating: 5,
    },
  ];

  return (
    <div
      className="courses-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "50px 0",
      }}
    >
      <Container>
        <h2 className="text-center text-white mb-5">Our Popular Courses</h2>
        <Row>
          {courses.map((course, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="course-card">
                <Card.Img variant="top" src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title className="course-title">{course.title}</Card.Title>
                  <div className="course-rating">
                    {"⭐".repeat(course.rating)}
                  </div>
                  <Card.Text className="course-price">{course.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
