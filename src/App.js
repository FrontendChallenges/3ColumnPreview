import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Row from 'react-bootstrap/Row';
import Btn from './components/Btn';
import PreviewContent from './components/PreviewContent';
import sedanIcon from './assets/images/icon-sedans.svg';
import suvsIcon from './assets/images/icon-suvs.svg';
import luxuryIcon from './assets/images/icon-luxury.svg';

function App() {
  return (
    <Container fluid='lg' className='container-box'>
      <Row className='container-box__content'>
        <Col>
          <main>
            <Row className='main-box overflow-hidden rounded-3'>
              <Col className='bg-warning'>
                <PreviewContent
                  alt='icon-sedan'
                  icon={sedanIcon}
                  title='sedans'
                  content='Choose a sedan for its affordability and 
              excellent fuel economy. Ideal for cruising in the city 
              or on your next road trip.'
                >
                  <Btn title='Learn More' textColor='text-warning' />
                </PreviewContent>
              </Col>
              <Col className='bg-secondary'>
                <PreviewContent
                  alt='icon-sedan'
                  icon={suvsIcon}
                  title='SUVs'
                  content='Take an SUV for its spacious interior, 
              power, and versatility. Perfect for your next family 
              vacation and off-road adventures.'
                >
                  <Btn title='Learn More' textColor='text-secondary' />
                </PreviewContent>
              </Col>
              <Col className='bg-success'>
                <PreviewContent
                  alt='icon-sedan'
                  icon={luxuryIcon}
                  title='Luxury'
                  content='Cruise in the best car brands without 
              the bloated prices. Enjoy the enhanced comfort of 
              a luxury rental and arrive in style.'
                >
                  <Btn title='Learn More' textColor='text-success' />
                </PreviewContent>
              </Col>
            </Row>
          </main>
        </Col>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
