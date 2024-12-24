import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic1 from '../assets/pic1.jpg';
import Pic2 from '../assets/pic2.jpg';
import Pic3 from '../assets/pic3.jpg';
import Pic4 from '../assets/pic4.jpg';
import '../components/secondcards.css';
const cardData = [
  {
    img: Pic1, 
    title: 'New Lectures Meeting',
    text: 'Details about Meeting 1.',
  },
  {
    img: Pic2,
    title: 'Online Teaching Techniques',
    text: 'Details about Meeting 2.',
  },
  {
    img: Pic3,
    title: 'Higher Education Conference',
    text: 'Details about Meeting 3.',
  },
  {
    img: Pic4,
    title: 'Student Training',
    text: 'Details about Meeting 4.',
  },
];

function GridExample() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>UPCOMING MEETINGS</h1>
      <div>
        <Row xs={1} md={2} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={card.img} alt={card.title} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
