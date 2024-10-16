import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BCard =({title , description, brand, price, src, warranty}) => {
  return (
    
      <Card style={{ height:'50rem' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><strong>Brand :</strong> {brand}</ListGroup.Item>
          <ListGroup.Item><strong>Price :</strong> {price}</ListGroup.Item>
          <ListGroup.Item><strong>Warranty :</strong> {warranty}</ListGroup.Item>
        </ListGroup>
      </Card>
     
  )
}

export default BCard
