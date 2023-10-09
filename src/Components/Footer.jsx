import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                GanaNaad
              </h6>
              <p>
              GanaNaad, a news media house in Tripura, has a motto of walking on the path of truth, for the people.
              </p>
            </MDBCol>

           

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://www.facebook.com/GanaNaad/' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='https://www.youtube.com/channel/UCNaIwKrHjA6PtnbYfIdyDtA' className='text-reset'>
                  Youtube
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Thakur palli Road, Krishna Nagar , Agartala, India, Tripura
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Gananad613@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +0 60333 63008
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://www.facebook.com/GanaNaad/'>
          GanaNaad Media House.
        </a>
      </div>
    </MDBFooter>
  );
}