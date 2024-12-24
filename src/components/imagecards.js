import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Card1 from '../assets/service1.jpg';
import Card2 from '../assets/service2.jpg';
import Card3 from '../assets/service3.jpg';


function imagecards() {
  return (
    <div>
     
         <CardGroup>
      <Card>
        <Card.Img  src={Card1} />
        <Card.Body>
          <Card.Title>Best Education</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img  src={Card2} />
        <Card.Body>
          <Card.Title>Best Teachers</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img  src={Card3} />
        <Card.Body>
          <Card.Title>Best Students</Card.Title>
        </Card.Body>
      
      </Card>
    
    </CardGroup>
    </div>
  )
}

export default imagecards;