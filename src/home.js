import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import {Card, Row} from 'react-bootstrap';

const Home = () => {
    const cardinfo = [

        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiXXKxjsnim2zluI3Xu-C6XDb5NeRzy7N4Q&usqp=CAU", title: "Job Listings", text: " Post job openings for your company and find the best fit " },
            ];
    
    const renderCard = (card, index) => {
    
        return (
            <Row>
            <Card style={{ width: '28rem', margin: '20px' }} key={index} className="box">
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
          <br>
          </br>
          <p>
          Welcome to our page!
          </p>
          <center><p> Services we offer</p></center>
          <center>
          <div className="grid">
            
            
            {cardinfo.map(renderCard)}
          
    
          </div>
          </center>
        </div>
      )
}

export default Home;