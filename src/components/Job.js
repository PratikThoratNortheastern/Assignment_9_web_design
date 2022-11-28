import React from 'react';
import {Card, Row} from 'react-bootstrap';

const Job = () => {

const cardinfo = [

    {image:"https://www.codemotion.com/magazine/wp-content/uploads/2020/05/developer-typing-on-keyboard-896x504.jpg", title: "Software Developer", text: " Apply now!" },
    {image:"https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg", title: "System Analyst", text: " Apply now! " },
    {image:"https://www.roberthalf.com/sites/default/files/2018-04/front-end-web-developer-salary-tcg-2018.jpg", title: "Web Developer", text: "Apply now!" },
    {image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220309002834/7-Skills-to-Become-a-Backend-Developer.png", title: "Backend Developer", text: " Apply now!" },
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
      <br></br>
      <center>
      <p>
      Following jobs are available
      </p>
      </center>
     
      <div className="grid2">
        
        
        {cardinfo.map(renderCard)}
      

      </div>
    </div>
  )
}

export default Job;