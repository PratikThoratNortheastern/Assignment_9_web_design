import React from 'react';
import {Card, Row} from 'react-bootstrap';

const Contact = () => {

const cardinfo = [

    {image:"https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?k=20&m=1271752802&s=612x612&w=0&h=O_QjEVcEdtQUGcUkJ8q19S93FFHNfs6AVlceDiqQ_jY=", title: "Contact Us", text: "Our team will solve your queries! Call Us on 123-456-789 or mail us at jobsearch@gmail.com" },
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
      Our Team will help you find the best place to work..
      </p>
      
      <div className="grid">
        {cardinfo.map(renderCard)}
      </div>
    </div>
  )
}

export default Contact;