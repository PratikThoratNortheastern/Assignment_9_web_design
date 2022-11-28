import React from 'react';
import {Card, Row} from 'react-bootstrap';

const AboutUs = () => {

const cardinfo = [

    {image:"https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg", title: "CEO", text: "XYZ" },
    ];

const renderCard = (card, index) => {

    return (
        <Row>
        <Card style={{ width: '28rem', margin: '20px'  }} key={index} className="box col-lg-3 col-md-4 col-12">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
          {card.text}
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Row>

    )
}
  

  return (
    <div className="component">
      
      <p>
      Job Search is a global leader in connecting people and jobs. Every day, Job Search aims to make every workplace happier and more productive by transforming the way employers and candidates find the right fit. For 25 years, Job Search has worked to transform the recruiting industry. Today, the company leverages advanced technology using intelligent digital, social and mobile solutions, including the flagship website Job Search.com®, Job Search’s innovative app, and a vast array of products and services.
      </p>
      <p> Meet our team</p>
      <div className="grid">
        
        
        {cardinfo.map(renderCard)}
      

      </div>
    </div>
  )
}

export default AboutUs;