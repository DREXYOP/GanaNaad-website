import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbarhome from './Navbarhome';
import { useEffect , useState } from 'react';
import Axios from "axios";
import config from "../config.json"



function Newscard() {
    //eslint-disable-next-line
    const [latestupload,setLatestupload] = useState([])
    // console.log(data)
    useEffect(() => {
        const api = Axios.create({
            baseURL: config._baseApiUrl
        })
        api.get("v1/news/get/latest")
          .then(res => {
            console.log(res)
            setLatestupload(res.data)
          })
          .catch(err => {
            console.log(err.message)
          })
      }, []);
    return (
        <>
        <Navbarhome/>
       
        {/* <div className="newscard">
           
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
    </div> */}
    <div className='latest_div'>
    <Card>
      <Card.Header as="h5">Uploaded today.</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </>
        );
}

export default Newscard;