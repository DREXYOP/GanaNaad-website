import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
// import Axios from "axios";
import config from "../config.json"
import Footer from "./Footer"
import api from "../_Api"



function Newscard() {
  //eslint-disable-next-line
  const [latestupload, setLatestupload] = useState({});
  const [todays, setTodays] = useState([]);
  const [india, setIndia] = useState([]);
  const [international, setInternational] = useState([]);
  const [tripura, setTripura] = useState([]);



  useEffect(() => {

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
    api.get("/v1/news/get/india")
      .then(res => {
        setIndia(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })
    api.get("/v1/news/get/international")
      .then(res => {
        setInternational(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })
    api.get("/v1/news/get/tripura")
      .then(res => {
        setTripura(res.data);

      })
      .catch(err => {
        console.log(err.message)
      })

  }, []);

  return (
    <>
      <div className='news_main_div'>
        <Navbar />

        
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
          {todays.map(n => {
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
              </div>
            )
          })}
        </div>
        
        <br></br>
        <hr></hr>
        <h3>Tripura News</h3>
        <hr></hr>
        <div className='all_div'>

          {tripura.map(n => {
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
        <br></br>
        <hr></hr>
        <h3>Indian News</h3>
        <hr></hr>
        <div className='all_div'>

          {india.map(n => {
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
        <br></br>
        <hr></hr>
        <h3>International News</h3>
        <hr></hr>
        <div className='all_div'>

          {international.map(n => {
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