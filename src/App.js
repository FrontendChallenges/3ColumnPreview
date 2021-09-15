import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PreviewContent from './components/PreviewContent';
import sedanIcon from './images/icon-sedans.svg';
import suvsIcon from './images/icon-suvs.svg';
import luxuryIcon from './images/icon-luxury.svg';

function App() {
  return (
    <Container fluid='sm'>
      <main>
        <Row>
          <Col className='bg-honey text-light rounded-start'>
            <PreviewContent
              alt='icon-sedan'
              icon={sedanIcon}
              title='sedan'
              content='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.'
            />
          </Col>
          <Col className='bg-forest text-light'>
            <PreviewContent
              alt='icon-sedan'
              icon={suvsIcon}
              title='SUVs'
              content='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.'
            />
          </Col>
          <Col className='bg-darkforest text-light rounded-end'>
            <PreviewContent
              alt='icon-sedan'
              icon={luxuryIcon}
              title='Luxury'
              content='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.'
            />
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;
