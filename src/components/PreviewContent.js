import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PreviewContent({ children, icon, alt, title, content }) {
  return (
    <Row className='flex-column p-5 m-4'>
      <Col className='mb-5'>
        <img src={icon} alt={alt} />
      </Col>
      <Col className='mb-5'>
        <h1 className='text-white text-opacity-95 text-uppercase'>{title}</h1>
      </Col>
      <Col className='mb-5'>
        <p className='text-white text-opacity-75 lh-lg'>{content}</p>
      </Col>
      <Col className='mt-5 pt-3'>{children}</Col>
    </Row>
  );
}

export default PreviewContent;
