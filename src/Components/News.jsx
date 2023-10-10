import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Navbarhome from './Navbarhome';
import { useEffect, useState } from 'react';
import Axios from "axios";
import config from "../config.json"
import Footer from "./Footer"



function Newscard() {
  //eslint-disable-next-line
  const [latestupload, setLatestupload] = useState({});
  const [todays, setTodays] = useState([]);
  const [thisweek, setThisweek] = useState([]);
  const [all, setAll] = useState([]);
  const [error, setError] = useState("")


  useEffect(() => {
    const api = Axios.create({
      baseURL: config._baseApiUrl,
      headers: { 'Authorization': `Bearer ${config.apikey}` }
    });
    api.get("/v1/news/get/latest")
      .then(res => {
        setLatestupload(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })
    api.get("/v1/news/get/today")
      .then(res => {
        setTodays(res.data)

      })
      .catch(err => {
        console.log(err.message)
      })
    api.get("/v1/news/get/thisweek")
      .then(res => {
        setThisweek(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })
    api.get("/v1/news/get")
      .then(res => {
        setAll(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })

  }, []);

  return (
    <>
      <div className='news_main_div'>
        <Navbarhome />

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
            <Card.Header as="h5">Latest . . . </Card.Header>
            <Card.Body>
              <Card.Title>{latestupload.title}</Card.Title>
              <Card.Text>
                {latestupload.description}
              </Card.Text>
              <Button variant="primary">View article</Button>
            </Card.Body>
          </Card>
        </div>
        <br></br>
        <hr></hr>
        <h3>Today's Uploads</h3>
        <hr></hr>
        <div className='all_div'>
            {all.map(n => {
              return (
                  <div>
                    <Card style={{ width: '18rem' }}>
                  <Card.Header as="h5">Uploaded At - {new Date(n.createdAt).toTimeString()} </Card.Header>
                      <Card.Img variant="top" src={n.imageUrl} />
                      <Card.Body>
                        <Card.Title>{n.title}</Card.Title>
                        <Card.Text>
                          {n.description}
                        </Card.Text>
                        <Button variant="primary">View article</Button>
                      </Card.Body>
                    </Card>
                    {/* <Card>
                    <Card.Header as="h5">{new Date(n.createdAt).toLocaleDateString()} </Card.Header>
                      <Card.Body>
                     
                        <Card.Title>{n.title}</Card.Title>
                        <Card.Text>
                          {n.description}
                        </Card.Text>
                        <Button variant="primary">View article</Button>
                      </Card.Body>
                    </Card> */}
                  </div>
              )
            })}
        </div>

        <br></br>
        <hr></hr>
        <h3>All Articles</h3>
        <hr></hr>
        <div className='all_div'>

          {all.map(n => {
            return (
              <>
                <div>
                  <Card style={{ width: '18rem' }}>
                  <Card.Header as="h5">{new Date(n.createdAt).toDateString()} At {new Date(n.createdAt).toTimeString()} </Card.Header>
                    <Card.Img variant="top" src={n.imageUrl} />
                    <Card.Body>
                      <Card.Title>{n.title}</Card.Title>
                      <Card.Text>
                        {n.description}
                      </Card.Text>
                      <Button variant="primary">View article</Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            )
          })}
        </div>
        <div className='footer_div'>
          <Footer />

        </div>
      </div >
    </>
  );
}

export default Newscard;