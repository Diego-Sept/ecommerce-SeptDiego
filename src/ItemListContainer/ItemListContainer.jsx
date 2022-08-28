import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemListContainer( {...props} ) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">{props.option}</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;