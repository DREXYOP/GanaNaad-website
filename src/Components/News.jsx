import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Newscard() {
    return (
        <div className="newscard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="favicon.ico" />
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        description
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>author</ListGroup.Item>
                    <ListGroup.Item>date</ListGroup.Item>
                    <ListGroup.Item>time</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Link</Card.Link>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Newscard;